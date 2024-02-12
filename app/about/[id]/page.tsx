import dynamic from "next/dynamic"

const VideoPlayer = dynamic(() => import("@/components/video_player/VideoPlayer"))
const Fragment = dynamic(() => import("@/UI/Fragment"))
const FilmAboutBlock = dynamic(() => import("@/components/FilmAboutBlock"))

import { robotoMedium } from "@/public/fonts"
import "./index.sass"

const page = ({ params }: { params: { id: number } }) => {

  const fragments = ["fragment1.webp", "fragment2.webp", "fragment3.webp", "fragment4.webp"]

  return (
    <div className="container_page">
        <div className="gradient pt-[1.6rem] mt-[1.2rem] rounded-[.5rem]">
            <FilmAboutBlock id={params.id}></FilmAboutBlock>

            <div className="flex flex-col items-center">
                <p className={`${robotoMedium} text-6xl text-white mb-[3.4rem]`}>Смотреть Трейлер</p>
                <VideoPlayer></VideoPlayer>
            </div>

            <div className="overflow-hidden">
                <div className="fragment-layout">
                    {fragments.map((url, i) => (
                        <Fragment key={i} url={url}></Fragment>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page