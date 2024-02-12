import { robotoMedium } from "@/public/fonts"
import "@/UI/button/seriesFilterBtn.sass"
import "@/components/video_player/videoTool.sass"

const SkeletonFilmContent = () => {
  return (
    <>
    <div className="container_page translate-y-[-4rem]">

        <div className="flex justify-between mb-[1.6rem]">
            <div className="w-[28.2rem] h-[3rem] bg-gray-hover-card rounded-[.5rem]"></div>
            <div className="w-[22.6rem] h-[3.8rem] bg-gray-hover-card rounded-[.5rem]"></div>
        </div>

        <div className="w-[100%] h-[11.2rem] bg-gray-hover-card rounded-[.5rem] mb-[4rem]"></div>

        <div className="flex flex-col">
            <p className={`${robotoMedium} text-white text-2xl mb-[.4rem]`}>Все серии</p>
            <div className="h-[0.1rem] bg-white mb-[1.6rem]"></div>

            <div className="w-[100%] h-[10rem] bg-gray-hover-card rounded-[.5rem]"></div>

        </div>

    </div>
    </>
  )
}

export default SkeletonFilmContent