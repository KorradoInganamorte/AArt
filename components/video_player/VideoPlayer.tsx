"use client"

import { useRef } from 'react';

import VideoTool from './VideoTool';
import { useGetFilmQuery } from '@/redux/services/anime';

type Props = {
  id: number
  series?: number
}

const VideoPlayer = ({ id, series }: Props) => {
  const { data: video } = useGetFilmQuery({ id: id })
  console.log(video)

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='w-[100%]' tabIndex={0} ref={containerRef}>
      <video className='w-[100%] h-[82vh] bg-black' ref={videoRef} src="/video/evangelion.short.mp4"></video>
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
