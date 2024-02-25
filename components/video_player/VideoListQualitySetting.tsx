import { Dispatch, SetStateAction } from "react"

import { robotoMedium } from "@/public/fonts"

type Props = {
  lists: string[]
  qualityActive: number
  setQualityActive: Dispatch<SetStateAction<number>>
}

const VideoListQualitySetting = ({ lists, qualityActive, setQualityActive }: Props) => {

  return (
    <>
      {lists.map((list, i) => (
        <div onClick={() => setQualityActive(i)} key={i} className="flex items-center px-[1.8rem] py-[.6rem] hover:bg-gray cursor-pointer ease-in-out transition-colors">
          {qualityActive === i ? (
            <img className="w-[1.2rem] h-[1rem] mr-[1.8rem]" src="/images/Apply.svg" alt="apply icon" />
          ) : (
            <div className="mr-[3rem]"></div>
          )}
          <p className={`${robotoMedium} text-lg text-white`}>{`${list}p`}</p>
        </div>
      ))}
    </>
  )
}

export default VideoListQualitySetting