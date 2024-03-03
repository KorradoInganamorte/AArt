import VideoPlayer from "@/components/video_player/VideoPlayer"
import FilmAboutBlock from "@/components/film/FilmAboutBlock"

import { robotoMedium } from "@/public/fonts"
import "./index.sass"

const Page = ({ params }: { params: { id: string } }) => {

  return (
        <div className="gradient pt-[1.6rem] mt-[1.2rem] rounded-[.5rem]">
            <FilmAboutBlock id={params.id} />

            <div className="flex flex-col items-center">
                <p className={`${robotoMedium} text-4xl text-white mb-[3.4rem]`}>Трейлер</p>
                <VideoPlayer id={params.id} series={"0"} />
            </div>
        </div>
  )
}

export default Page