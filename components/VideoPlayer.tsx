"use client"

import { useRef, useState } from 'react';
import VideoTool from './VideoTool';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconMessagePlayPause = useRef<HTMLDivElement>(null);
  const [isHiddenInterface, setIsHiddenInterface] = useState(false)
  const [isPlayed, setisPlayed] = useState<boolean>(true)

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
    setTimeout(() => {
      setIsHiddenInterface(true)
    }, 4000)
  }

  return (
    <div tabIndex={0} ref={containerRef} onTouchMove={checkIsHiddenInterface} onTouchStart={toggleIsHiddenInterfaceMobile} onMouseMove={hideInterface} onMouseLeave={checkIsHiddenInterface} >
      <video onClick={handlePlayPause} className='w-[100%] h-[82vh] bg-black' ref={videoRef} src="video/evangelion.short.mp4"></video>
      <div ref={iconMessagePlayPause} className='absolute top-[40vh] left-[45vw] flex items-center justify-center w-[8.4rem] h-[8.4rem] bg-gray/60 rounded-[50%] opacity-0 ease-in transition-opacity'><img className={`${isPlayed ? "w-[3.2rem] h-[3.2rem] translate-x-[.4rem]" : "w-[3.2rem] h-[3.8rem]"}`} src={isPlayed ? "/images/Play.svg" : "/images/Pause.svg"} alt="play/pause message icon" /></div>
      {videoRef.current && containerRef.current ? (
        <VideoTool isHiddenInterface={isHiddenInterface} isPlayed={isPlayed}  videoRef={videoRef} containerRef={containerRef} handlePlayPause={handlePlayPause} ></VideoTool>
      ) : (
        // статическая разметка с которой нельзя взаимодействовать пока не загрузится 
        <VideoTool className='cursor-not-allowed' isHiddenInterface={isHiddenInterface} isPlayed={isPlayed}  videoRef={videoRef} containerRef={containerRef} handlePlayPause={handlePlayPause} ></VideoTool>
      )}
    </div>
  );
};

export default VideoPlayer;
