import { getFromStorage, setToStorage } from "@/lib/localStorage"
import { useQuality } from "@/context/qualityContext"

import { poppinsMedium } from "@/public/fonts"

type Props = {
  lists: string[]
}

const VideoListQualitySetting = ({ lists }: Props) => {

  const { setCurrentQuality } = useQuality()

  const setValue = (i: number) => {
    setCurrentQuality(lists[i])
    setToStorage("quality", lists[i])
    setToStorage("quality_active", i)
  }

  return (
    <>
      {lists.map((list, i) => (
        <div onClick={() => setValue(i)} key={i} className="flex items-center px-[1.8rem] py-[.6rem] hover:bg-gray cursor-pointer ease-in-out transition-colors">
          {Number(getFromStorage("quality_active")) === i ? (
            <img className="w-[1.2rem] h-[1rem] mr-[1.8rem]" src="/images/Apply.svg" alt="apply icon" />
          ) : (
            <div className="mr-[3rem]"></div>
          )}
          <p className={`${poppinsMedium} text-lg text-white`}>{`${list}p`}</p>
        </div>
      ))}
    </>
  )
}

export default VideoListQualitySetting