"use client"

import Head from 'next/head';
import { useRef } from 'react';

import { useGetOnesAnimeQuery } from '@/redux/services/anime';

import { useQuality } from '@/context/qualityContext';

import VideoTool from './VideoTool';

type Props = {
  id: string
  series: string
}

const VideoPlayer = ({ id, series }: Props) => {
  const { data: anime } = useGetOnesAnimeQuery({ id: id })

  // const [currentQuality, setCurrentQuality] = useState<string>("720")
  const { currentQuality, setCurrentQuality } = useQuality()

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='w-[100%] h-[82vh] mb-[2rem]' tabIndex={0} ref={containerRef}>
      <Head>
        <link rel="preload" as="image" href="/images/Pause.svg"/>
        <link rel="preload" as="image" href="/images/VolumeDisabled.svg"/>
      </Head>
      <video className='relative w-[100%] h-[82vh] bg-black' ref={videoRef} src={`https://storage.yandexcloud.net/aart/${anime ? anime?.data.attributes.url_yandex_object : "evangelion"}/ep${series}.${currentQuality}.mp4`} />
      {videoRef.current && containerRef.current ? (
        <VideoTool series={series} anime={anime} videoRef={videoRef} containerRef={containerRef}></VideoTool>
      ) : (
        // статическая разметка с которой нельзя взаимодействовать пока не загрузится 
        <VideoTool series={series} anime={anime} className='cursor-not-allowed' videoRef={videoRef} containerRef={containerRef}></VideoTool>
      )}
    </div>
  );
};

export default VideoPlayer;
