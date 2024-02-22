import dynamic from "next/dynamic"

const FilmContent = dynamic(() => import("@/components/film/FilmContent"))
const VideoPlayer = dynamic(() => import("@/components/video_player/VideoPlayer"))

const Page = ({ params }: { params: { id: string, series: string } }) => {

  return (
    <>
      <VideoPlayer id={params.id} series={params.series} />
      <FilmContent id={params.id} series={params.series} />
    </>
  )
}

export default Page