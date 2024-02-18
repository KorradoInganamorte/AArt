"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const FilmContent = dynamic(() => import("@/components/film/FilmContent"))

import VideoPlayer from "@/components/video_player/VideoPlayer"

const Page = ({ params }: { params: { id: number } }) => {
  const [series, setSeries] = useState<number>(0)

  return (
    <>
      <VideoPlayer id={params.id} series={series} />
      <FilmContent id={params.id} series={series} setSeries={setSeries} />
    </>
  )
}

export default Page