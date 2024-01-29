"use client"

import { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/UI/Loader';
const VideoTool = dynamic(() => import("@/components/VideoTool"))

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlayed, setisPlayed] = useState<boolean>(true)
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
        videoRef.current.className = "w-[100%] h-[80vh] bg-black"
        document.exitFullscreen();
      } else {
          videoRef.current.className = "w-[100%] h-[100%] bg-black"
          containerRef.current.requestFullscreen();
      }
    }
  };

  // изменение масштаба при нажатии на клавишу "f"
  // нормально типизировать event
  const toggleFullscreenKeyDown = (e: any) => {
    if (e.key === "f" || e.key === "а") {
      toggleFullscreen()
    }
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

  useEffect(() => {
    if (videoRef.current) {
      setDuration(formatTime(Number(videoRef.current.duration.toFixed())));
      videoRef.current.addEventListener('timeupdate', updateCurrentTime);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', updateCurrentTime);
      }
    };
  }, [videoRef]);

  console.log("duration = ", duration)
  // console.log("currentTime = ", currentTime)

  return (
    <div tabIndex={0} onClick={() => containerRef.current?.focus()} ref={containerRef} onKeyDown={toggleFullscreenKeyDown}>
      <video onClick={handlePlayPause} className='w-[100%] h-[80vh] bg-black' ref={videoRef} src="video/evangelion.ep1.mp4"></video>
      {videoRef.current && containerRef.current ? (
        <VideoTool isPlayed={isPlayed} currentTime={currentTime} duration={duration} videoRef={videoRef} formatTime={formatTime} handlePlayPause={handlePlayPause} handleFullScreenChange={handleFullScreenChange}></VideoTool>
      ) : (
        // статическая разметка с которой нельзя взаимодействовать пока не загрузится 
        <VideoTool className='cursor-not-allowed' isPlayed={isPlayed} currentTime={currentTime} duration={duration} videoRef={videoRef} formatTime={formatTime} handlePlayPause={handlePlayPause} handleFullScreenChange={handleFullScreenChange}></VideoTool>
      )}
    </div>
  );
};

export default VideoPlayer;
