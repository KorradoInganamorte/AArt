import { poppinsMedium, robotoBold } from "@/public/fonts"

type Props = {
    title: string
    value: string
}

const VideoListSetting = ({ title, value }: Props) => {
  return (
    <div className="flex items-center justify-between px-[1.8rem] py-[.6rem] hover:bg-gray cursor-pointer ease-in-out transition-colors">
        <div className="flex items-center">
            <img className="w-[2rem] h-[1.8rem] mr-[1.4rem]" src="/images/VideoQualitySettings.svg" alt="video quality settings" />
            <p className={`${robotoBold} text-base text-white`}>{title}</p>
        </div>

        <div className="flex items-center">
            <p className={`${poppinsMedium} text-base text-white mr-[1.2rem]`}>{value}</p>
            <img className="w-[.8rem] h-[1.3rem]" src="/images/ArrowNextWhite.svg" alt="arrow next" />
        </div>
    </div>
  )
}

export default VideoListSetting