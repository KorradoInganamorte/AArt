import { robotoMedium } from "@/public/fonts"
import "@/components/film/filmContent.sass"
import "@/components/video_player/videoTool.sass"

const SkeletonFilmContent = () => {
  return (
    <>
    <div className="container_page">

        <div className="flex justify-between mb-[1.6rem]">
            <div className="w-[37.2rem] h-[3rem] bg-gray-hover-card rounded-[.5rem]"></div>
            <div className="w-[22.8rem] h-[3.8rem] bg-gray-hover-card rounded-[.5rem]"></div>
        </div>

        <div className="w-[100%] h-[15.9rem] bg-gray-hover-card rounded-[.5rem] mb-[4rem]"></div>

        <div className="flex flex-col">
            <p className={`${robotoMedium} text-white text-2xl mb-[.4rem]`}>Все серии</p>
            <div className="h-[0.1rem] bg-white mb-[1.6rem]"></div>

            <div className="w-[100%] h-[16rem] bg-gray-hover-card rounded-[.5rem]"></div>

        </div>

    </div>
    </>
  )
}

export default SkeletonFilmContent