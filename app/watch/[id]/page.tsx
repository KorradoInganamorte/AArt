import VideoPlayer from "@/components/video_player/VideoPlayer"
import dynamic from "next/dynamic"

const FilmContent = dynamic(() => import("@/components/film/FilmContent"))

const Page = ({ params }: { params: { id: number } }) => {

  return (
    <>
      <VideoPlayer />
      <FilmContent id={params.id} />
    </>
  )
}

export default Page