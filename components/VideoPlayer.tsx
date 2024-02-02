"use client"

import { useRef } from 'react';
import VideoTool from './VideoTool';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div tabIndex={0} ref={containerRef}>
      <video className='w-[100%] h-[82vh] bg-black' ref={videoRef} src="video/evangelion.short.mp4"></video>
      {/* <div ref={iconMessagePlayPause} className='absolute top-[40vh] left-[45vw] flex items-center justify-center w-[8.4rem] h-[8.4rem] bg-gray/60 rounded-[50%] opacity-0 ease-in transition-opacity'><img className={`${isPlayed ? "w-[3.2rem] h-[3.2rem] translate-x-[.4rem]" : "w-[3.2rem] h-[3.8rem]"}`} src={isPlayed ? "/images/Play.svg" : "/images/Pause.svg"} alt="play/pause message icon" /></div> */}
      {videoRef.current && containerRef.current ? (
        <VideoTool videoRef={videoRef} containerRef={containerRef}></VideoTool>
      ) : (
        // статическая разметка с которой нельзя взаимодействовать пока не загрузится 
        <VideoTool className='cursor-not-allowed' videoRef={videoRef} containerRef={containerRef}></VideoTool>
      )}
    </div>
  );
};

export default VideoPlayer;
