"use client"

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { getFromStorage, setToStorage } from '@/lib/localStorage';
const VideoTool = dynamic(() => import("@/components/VideoTool"))

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconMessagePlayPause = useRef<HTMLDivElement>(null);
  const [isHiddenInterface, setIsHiddenInterface] = useState(false)
  const [isPlayed, setisPlayed] = useState<boolean>(true)
  const [currentWidth, setCurrentWidth] = useState<string>("0");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:00");

// основоной функционал
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        iconMessagePlayPause.current?.classList.remove("opacity-100")
        iconMessagePlayPause.current?.classList.add("opacity-0")
        videoRef.current.play();
        setisPlayed(false)
      } else {
        iconMessagePlayPause.current?.classList.remove("opacity-0")
        iconMessagePlayPause.current?.classList.add("opacity-100")
        videoRef.current.pause();
        setisPlayed(true)
      }
    }
  };


// Изменение масштаба
  // изменение масштаба при нажатии на кнопку
  const handleFullScreenChange = () => {
    toggleFullscreen()
  };

  // изменение масштаба при двойном клике по видео
  const toggleFullscreen = () => {
    if (containerRef.current && videoRef.current) {
      if(document.fullscreenElement) {
        videoRef.current.className = "w-[100%] h-[82vh] bg-black"
        document.exitFullscreen();
      } else {
          videoRef.current.className = "w-[100%] h-[100%] bg-black"
          containerRef.current.requestFullscreen();
      }
    }
  };

// изменение масштаба при нажатии на клавишу "f"
  // нормально типизировать event
  const keyDownEvent = (e: any) => {
    e.preventDefault()
    if (videoRef.current) {
      switch (e.key) {
        case "f":
          toggleFullscreen()
          break;
        case "а":
          toggleFullscreen()
          break;
        case "ArrowRight":
          setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime += 10)))
          break;
        case "ArrowLeft":
          if(videoRef.current.currentTime > 10) {
            setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime -= 10)))
          }
          break;
        case " ":
          handlePlayPause()
          break;
        default:
          break;
      }
    }
  }

// Показ/Скрытие VideoTool
  // MouseLeave
  const checkIsHiddenInterface = () => {
      if(isPlayed) {
        setIsHiddenInterface(false)
      } else {
        setIsHiddenInterface(true)
      }
  }
  // MouseMove
  const hideInterface = () => {
    setIsHiddenInterface(false)
  }

  // MobileLeave
  const toggleIsHiddenInterfaceMobile = () => {
    setIsHiddenInterface(false)
    console.log("mobile touch start")
    setTimeout(() => {
      console.log("mobile touch end")
      setIsHiddenInterface(true)
    }, 4000)
  }

// TimeLine
  const correctDisplayNumber = (number: number) => number < 10 ? `0${number}` : `${number}`

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${correctDisplayNumber(Math.floor(seconds % 60))}`
  }

  const updateCurrentTime = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime)));
    }
  };

  const updateCurrentParams = () => {
    updateCurrentTime()
    setCurrentWidth((Number(videoRef.current?.currentTime) / Number(videoRef.current?.duration) * 100).toString())
  }

  const throttledUpdateCurrentParams = throttle(updateCurrentParams, 1000);

  function throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  useEffect(() => {
    const storageCurrentTime = getFromStorage("currentTime")
    if (storageCurrentTime && storageCurrentTime !== "0:00" && videoRef.current) {
      videoRef.current.currentTime = Number(storageCurrentTime)
    }
    if (videoRef.current) {
      setDuration(formatTime(Number(videoRef.current.duration.toFixed())));
      videoRef.current.addEventListener('timeupdate', throttledUpdateCurrentParams);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', throttledUpdateCurrentParams);
      }
    };
  }, []);

  useEffect(() => {
    setToStorage("currentTime", videoRef.current?.currentTime)
  }, [videoRef.current?.currentTime])

  if (typeof window !== undefined && containerRef.current && videoRef.current) {
    containerRef.current?.focus({preventScroll: true})
  }

  return (
    <div tabIndex={0} ref={containerRef} onTouchMove={checkIsHiddenInterface} onTouchStart={toggleIsHiddenInterfaceMobile} onMouseMove={hideInterface} onMouseLeave={checkIsHiddenInterface} onKeyDown={keyDownEvent}>
      <video onClick={handlePlayPause} className='w-[100%] h-[82vh] bg-black' ref={videoRef} src="video/evangelion.short.mp4"></video>
      <div ref={iconMessagePlayPause} className='absolute top-[40vh] left-[45vw] flex items-center justify-center w-[8.4rem] h-[8.4rem] bg-gray/60 rounded-[50%] opacity-0 ease-in transition-opacity'><img className={`${isPlayed ? "w-[3.2rem] h-[3.2rem] translate-x-[.4rem]" : "w-[3.2rem] h-[3.8rem]"}`} src={isPlayed ? "/images/PLay.svg" : "/images/Pause.svg"} alt="play/pause message icon" /></div>
      {videoRef.current && containerRef.current ? (
        <VideoTool isHiddenInterface={isHiddenInterface} isPlayed={isPlayed} currentWidth={currentWidth} currentTime={currentTime} duration={duration} videoRef={videoRef} formatTime={formatTime} handlePlayPause={handlePlayPause} handleFullScreenChange={handleFullScreenChange}></VideoTool>
      ) : (
        // статическая разметка с которой нельзя взаимодействовать пока не загрузится 
        <VideoTool className='cursor-not-allowed' isHiddenInterface={isHiddenInterface} isPlayed={isPlayed} currentWidth={currentWidth} currentTime={currentTime} duration={duration} videoRef={videoRef} formatTime={formatTime} handlePlayPause={handlePlayPause} handleFullScreenChange={handleFullScreenChange}></VideoTool>
      )}
    </div>
  );
};

export default VideoPlayer;
