import dynamic from "next/dynamic"

import { Dispatch, RefObject, SetStateAction, useEffect } from "react"

const VideoListQualitySetting = dynamic(() => import("@/components/video_player/VideoListQualitySetting"))

import { robotoMedium } from "@/public/fonts"

type Props = {
  lists: string[]

  qualityActive: number
  setQualityActive: Dispatch<SetStateAction<number>>

  showQualitySettingsInterface: boolean
  setShowQualitySettingsInterface: Dispatch<SetStateAction<boolean>>

  settingsInterfaceRef: RefObject<HTMLDivElement>
  qualitySettngsInterfaceRef: RefObject<HTMLDivElement>

  backToSettingsInterface: (set: (value: SetStateAction<boolean>) => void, ref: RefObject<HTMLDivElement>) => void
  }

const VideoQualitySetting = ({ lists, showQualitySettingsInterface, setShowQualitySettingsInterface, settingsInterfaceRef, qualitySettngsInterfaceRef, backToSettingsInterface }:Props) => {

  const handleSubSettingsClickOutside = (e: any) => {
    e.preventDefault()
    if (!settingsInterfaceRef.current?.contains(e.target) && !qualitySettngsInterfaceRef.current?.contains(e.target)) {
      setShowQualitySettingsInterface(false)
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleSubSettingsClickOutside)

    return () => {
      document.removeEventListener("click", handleSubSettingsClickOutside)
    }
  }, [])

  return (
    <div ref={qualitySettngsInterfaceRef} className={`${showQualitySettingsInterface ? "absolute" : "hidden"} right-[.8rem] bottom-[5.2rem] w-[23.6rem] bg-gray-hover-card/80 pb-[.8rem] rounded-[.5rem]`}>
        <div onClick={() => backToSettingsInterface(setShowQualitySettingsInterface, qualitySettngsInterfaceRef)} className="flex items-center mx-[1.8rem] py-[1rem] cursor-pointer">
            <img className="w-[.8rem] h-[1.3rem] mr-[2.2rem]" src="/images/ArrowBack.svg" alt="arrow back" />
            <p className={`${robotoMedium} text-lg text-white`}>Разрешение</p>
        </div>

        <div className="w-full h-[.1rem] bg-white mb-[.8rem]"></div>

        <VideoListQualitySetting lists={lists} />
    </div>
  )
}

export default VideoQualitySetting