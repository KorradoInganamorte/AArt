import "./videoTool.sass"

import { robotoMedium } from "@/public/fonts"
import { RefObject, useRef } from "react"

type Props = {
    className?: string
    isPlayed?: boolean
    currentTime: string
    duration: string
    videoRef: RefObject<HTMLVideoElement>
    formatTime: (seconds: number) => string
    handlePlayPause: () => void
    handleFullScreenChange: () => void
}

const Video = ({ className, isPlayed, currentTime, duration, videoRef, formatTime, handlePlayPause, handleFullScreenChange }: Props) => {
  const timeLineRef = useRef<HTMLInputElement>(null)
  const showTime = useRef<HTMLDivElement>(null)

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
    }
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const showTimeMouseMove = (e: any) => {
    if(showTime.current) {
      const x = e.pageX
      showTime.current.style.display = "inline-block"
      showTime.current.style.setProperty("--x", `${x}px`)

      const time = formatTime(Number((e.pageX * 0.0257142857 - 0.2).toFixed()))
      showTime.current.innerHTML = time
    }
  }

  const hideTimeMouseMove = () => {
    if(showTime.current) {
        showTime.current.style.display = "none"
    }
  }
  
  return (
    <div className={`${className} translate-y-[-6rem]`}>
      <div ref={showTime} className={`showTime hidden absolute bg-gray py-[.4rem] px-[1rem] mx-[2rem] rounded-[.5rem] ${robotoMedium} text-lg text-white translate-y-[-2.5rem]`}>0:12</div>
      <input onMouseLeave={hideTimeMouseMove} onMouseMove={showTimeMouseMove} ref={timeLineRef} className=' w-[100%] h-[.1rem] bg-gray cursor-grab translate-y-[.3rem]' type="range" min={0} max={className === "cursor-not-allowed" ? 1 : Number(duration.replace(":", ""))} step={1} value={className === "cursor-not-allowed" ? 0 : Number(currentTime.replace(":", ""))} onChange={(e) => handleSeek(parseFloat(e.target.value))} />
      <div className='flex items-center justify-between w-[100%] py-[1.2rem] px-[3rem] bg-black/30'>
        
        <div className='flex items-center'>
          <button onClick={handlePlayPause}><img className='w-[1.6rem] h-[1.8rem] mr-[2.4rem]' src={isPlayed ? "/images/Play.svg" : "images/Pause.svg"} alt="play/pause button" /></button>
          
          <div className='flex items-center mr-[2.4rem]'>
            <img className='w-[1.8rem] h-[1.6rem] mr-[1rem]' src="/images/Volume.svg" alt="" />
            <input className='volume w-[5.8rem] h-[.1rem] bg-white cursor-pointer' type="range" min={0} max={1} step={0.1} onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}/>
          </div>

          <p className={`${robotoMedium} text-lg text-white`}>{currentTime} / {duration}</p>
        </div>

        <button className='w-[2.2rem] h-[2.2rem]' onClick={handleFullScreenChange}><img src="/images/FullScreen.svg" alt="full screen button" /></button>
      </div>
    </div>
  )
}

export default Video