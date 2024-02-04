"use client"

import { useRef } from 'react';

import VideoTool from './VideoTool';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div tabIndex={0} ref={containerRef}>
      <video className='w-[100%] h-[82vh] bg-black' ref={videoRef} src="video/evangelion.short.mp4"></video>
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
