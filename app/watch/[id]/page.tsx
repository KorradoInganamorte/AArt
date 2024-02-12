import VideoPlayer from "@/components/video_player/VideoPlayer"
import dynamic from "next/dynamic"

const FilmContent = dynamic(() => import("@/components/film/FilmContent"))

const page = ({ params }: { params: { id: number } }) => {

  return (
    <>
      <VideoPlayer></VideoPlayer>
      <FilmContent id={params.id} />
    </>
  )
}

export default page