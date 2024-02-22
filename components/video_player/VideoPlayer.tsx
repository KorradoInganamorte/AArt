"use client"

import Head from 'next/head';
import { useRef } from 'react';

import { useGetFilmQuery } from '@/redux/services/anime';
import { usePort } from '@/context/portContext';

import VideoTool from './VideoTool';

type Props = {
  id: number
  series: number
}

const VideoPlayer = ({ id, series }: Props) => {
  const { PORT } = usePort()
  const { data: video } = useGetFilmQuery({ id: id })

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='w-[100%] h-[82vh] mb-[2rem]' tabIndex={0} ref={containerRef}>
      <Head>
        <link rel="preload" as="image" href="/images/Play.svg"/>
        <link rel="preload" as="image" href="/images/Pause.svg"/>
      </Head>
      <video className=' relative w-[100%] h-[82vh] bg-black' ref={videoRef} src={`${PORT}${video?.data.attributes.video_series[series].series.data.attributes.url}`} />
      {videoRef.current && containerRef.current ? (
        <VideoTool series={series} videoRef={videoRef} containerRef={containerRef}></VideoTool>
      ) : (
        // статическая разметка с которой нельзя взаимодействовать пока не загрузится 
        <VideoTool series={0} className='cursor-not-allowed' videoRef={videoRef} containerRef={containerRef}></VideoTool>
      )}
    </div>
  );
};

export default VideoPlayer;
