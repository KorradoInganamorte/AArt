"use client"

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const VideoTool = dynamic(() => import("@/components/VideoTool"))

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHiddenInterface, setIsHiddenInterface] = useState(false)
  const [isPlayed, setisPlayed] = useState<boolean>(true)
  const [currentWidth, setCurrentWidth] = useState<string>("0");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:00");

// основоной функционал
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setisPlayed(false)
      } else {
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

  // изменение масштаба при двойном клике по контейнеру
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
  const keyDwonEvent = (e: any) => {
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
          if(currentTime !== "0:00") {
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

  useEffect(() => {
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

  if (typeof window !== undefined && containerRef.current && videoRef.current) {
    containerRef.current?.focus({preventScroll: true})
  }

  return (
    <div tabIndex={0} ref={containerRef} onTouchMove={checkIsHiddenInterface} onTouchStart={toggleIsHiddenInterfaceMobile} onMouseMove={hideInterface} onMouseLeave={checkIsHiddenInterface} onKeyDown={keyDwonEvent}>
      <video onClick={handlePlayPause} className='w-[100%] h-[82vh] bg-black' ref={videoRef} src="video/evangelion.ep1.mp4"></video>
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
