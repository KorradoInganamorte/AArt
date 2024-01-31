import "./videoTool.sass"

import { robotoMedium } from "@/public/fonts"
import { RefObject, useEffect, useRef } from "react"

type Props = {
    className?: string
    isHiddenInterface: boolean
    isPlayed?: boolean
    currentWidth: string
    currentTime: string
    duration: string
    videoRef: RefObject<HTMLVideoElement>
    formatTime: (seconds: number) => string
    handlePlayPause: () => void
    handleFullScreenChange: () => void
}

const Video = ({ className, isHiddenInterface, isPlayed, currentWidth, currentTime, duration, videoRef, formatTime, handlePlayPause, handleFullScreenChange }: Props) => {
  const timeLineRef = useRef<HTMLInputElement>(null)
  const currentTimeLineRef = useRef<HTMLDivElement>(null)
  const showTimeRef = useRef<HTMLDivElement>(null)

  // Изменение громкости видео
  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value
    }
  };

// Логика showTimeRef (всплывашка при перемотке видео, которая показывает время, на которое пользователь хочет перемотать)
  // Типизировать нормально event
  const showTimeMouseMove = (e: any) => {
    if(showTimeRef.current && videoRef.current) {
      const x = e.pageX
      showTimeRef.current.style.display = "inline-block"
      showTimeRef.current.style.setProperty("--x", `${x}px`)

      const time = formatTime((e.clientX / e.target.offsetWidth) * videoRef.current.duration + 1)
      showTimeRef.current.innerHTML = time
    }
  }

  const hideTimeMouseMove = () => {
    if(showTimeRef.current) {
        showTimeRef.current.style.display = "none"
    }
  }

  // Изменение currentTime на то время, которое выбрал пользователь на тайм лайне
  const changeCurrentTimeRewind = (e: any) => {
    if (videoRef.current && timeLineRef.current) {
      videoRef.current.currentTime = (e.clientX / e.target.offsetWidth) * videoRef.current.duration
    }
  };

  // Изменение длины currentTimeLineRef каждую секунду на нужное значение (currentTime)
  useEffect(() => {
    if (currentTimeLineRef.current) {
      currentTimeLineRef.current.style.width = `${currentWidth}%`
    }
  }, [videoRef.current?.currentTime])

  // console.log(isHiddenInterface)
  
  return (
    <div className={`${className} translate-y-[-6rem] ${isHiddenInterface ? "opacity-0" : "opacity-100"} ease-in transition-opacity`}>
      <div ref={showTimeRef} className={`showTime hidden absolute bg-gray/80 py-[.4rem] px-[1rem] rounded-[.5rem] ${robotoMedium} text-lg text-white translate-y-[-2.5rem]`}>0:00</div>
      {/* <input onMouseLeave={hideTimeMouseMove} onMouseMove={showTimeMouseMove} ref={timeLineRef} className=' w-[100%] h-[.1rem] bg-gray cursor-grab translate-y-[.3rem]' type="range" min={0} max={className === "cursor-not-allowed" ? 1 : Number(duration.replace(":", ""))} step={1} value={className === "cursor-not-allowed" ? 0 : Number(currentTime.replace(":", ""))} onChange={(e) => changeCurrentTimeRewind(parseFloat(e.target.value))} /> */}
      <div onMouseLeave={hideTimeMouseMove} onMouseMove={showTimeMouseMove} onClick={changeCurrentTimeRewind} ref={timeLineRef} className='flex flex-wrap items-end w-[100%] h-[1rem] translate-y-[.42rem] cursor-pointer' >
        <div ref={currentTimeLineRef} className="z-[1] w-[0%] h-[.1rem] bg-red translate-y-[.5rem]"></div>
        <div className="w-[100%] h-[.1rem] bg-gray"></div>
      </div>
      <div className='flex items-center justify-between w-[100%] py-[1.2rem] px-[3rem] bg-black/30 translate-y-[4px]'>
        
        <div className='flex items-center'>
          <button onClick={handlePlayPause}><img className='w-[1.6rem] h-[1.8rem] mr-[2.4rem]' src={isPlayed ? "/images/Play.svg" : "images/Pause.svg"} alt="play/pause button" /></button>
          
          <div className='flex items-center mr-[2.4rem]'>
            <img className='w-[1.8rem] h-[1.6rem] mr-[1rem]' src="/images/Volume.svg" alt="" />
            <input onChange={(e) => handleVolumeChange(parseFloat(e.target.value))} className='w-[5.8rem] h-[.1rem] bg-white cursor-pointer' type="range" min={0} max={1} step={0.1}/>
          </div>

          <p className={`${robotoMedium} text-lg text-white`}>{currentTime} / {duration}</p>
        </div>

        <button onClick={handleFullScreenChange} className='w-[2.2rem] h-[2.2rem]'><img src="/images/FullScreen.svg" alt="full screen button" /></button>
      </div>
    </div>
  )
}

export default Video