import dynamic from "next/dynamic"
import { usePathname, useRouter } from "next/navigation"
import { RefObject, SetStateAction, useEffect, useRef, useState } from "react"

import { getFromStorage, setToStorage } from "@/lib/localStorage"
import { useQuality } from "@/context/qualityContext"

const VideoListSetting = dynamic(() => import("@/components/video_player/VideoListSetting"))
const VideoQualitySetting = dynamic(() => import("@/components/video_player/VideoQualitySetting"))

import Loader from "@/UI/loader/Loader"

import { Anime } from "@/types/Anime"

import { robotoMedium } from "@/public/fonts"
import "./videoTool.sass"

type Props = {
  className?: string
  series: string
  anime: Anime | undefined
  videoRef: RefObject<HTMLVideoElement>
  containerRef: RefObject<HTMLDivElement>
}

const VideoTool = ({ className, series, anime, videoRef, containerRef }: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  const { currentQuality, setCurrentQuality } = useQuality()

  const [isPlayed, setIsPlayed] = useState<boolean>(true)
  const [isHiddenInterface, setIsHiddenInterface] = useState<boolean>(false)

  const [currentVolumeDisabled, setCurrentVolumeDisabled] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<string>("0");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:00");

  const videoToolRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const iconMessagePlayPause = useRef<HTMLButtonElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null)
  const timeLineRef = useRef<HTMLInputElement>(null)
  const currentTimeLineRef = useRef<HTMLDivElement>(null)
  const showTimeRef = useRef<HTMLDivElement>(null)
  const settingsButtonRef = useRef<HTMLButtonElement>(null)
  const settingsInterfaceRef = useRef<HTMLDivElement>(null)
  const qualitySettngsInterfaceRef = useRef<HTMLDivElement>(null)

  const [showSettingsInterface, setShowSettingsInterface] = useState<boolean>(false)
  const [showQualitySettingsInterface, setShowQualitySettingsInterface] = useState<boolean>(false)

  const quality = ["1080", "720", "360"]
  const [qualityActive, setQualityActive] = useState<number>(1)

  // Изменение громкости видео
  const changeVolume = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value
      if (volumeRef.current && volumeRef.current.value !== "0") {
        setCurrentVolumeDisabled(false)
      } else if (volumeRef.current && volumeRef.current.value === "0") {
        setCurrentVolumeDisabled(true)
      }
    }
  };

  const handleVolumeChange = () => {
    if (volumeRef.current && volumeRef.current.value !== "0") {
      changeVolume(0)
      volumeRef.current.value = "0"
      setCurrentVolumeDisabled(true)
    } else if (volumeRef.current && volumeRef.current.value === "0") {
      changeVolume(0.5)
      volumeRef.current.value = "0.5"
      setCurrentVolumeDisabled(false)
    }
  }

  // Изменение состояния просмотра видео (пауза/воспроизвведение)
  const handlePlayPause = () => {
    setIsHiddenInterface(false)
    if (videoRef.current) {
      if (videoRef.current.paused) {
        setIsPlayed(false)
        videoRef.current.play();
      } else {
        setIsPlayed(true)
        videoRef.current.pause();
      }
    }
  };

  // Переключение на предыдущую/следующую серию
  const nextSeriesHandleClick = () => {
    Number(series) < Number(anime?.data.attributes.series.split(" ")[0]) && router.push((Number(series) + 1).toString())
  }

  const previousSeriesHandleClick = () => {
    Number(series) > 1 && router.push((Number(series) - 1).toString())
  }

// Показ/Скрытие VideoTool
  // MouseLeave
  const checkIsHiddenInterface = () => {
    if(videoRef.current && videoRef.current.paused) {
      setIsHiddenInterface(false)
    } else {
      setIsHiddenInterface(true)
    }
  }

  // MouseOver
  const showInterface = () => {
    setIsHiddenInterface(false)

    if(document.fullscreenElement && !videoRef.current?.paused) {
      const id = setTimeout(() => {
        setIsHiddenInterface(true)
        clearTimeout(id)
      }, 2400)
    }
  }

  const throttleShowInterface = throttle(showInterface, 500)

// Логика showTimeRef (всплывашка при перемотке видео, которая показывает время, на которое пользователь хочет перемотать)
  // Типизировать нормально event
  const showTimeMouseMove = (e: any) => {
    if(showTimeRef.current && videoRef.current) {
      let x = e.pageX;
  
      // Если showTimeRef выходит за пределы страницы, сдвигаем его внутрь
      if (x + showTimeRef.current.offsetWidth / 2 > window.innerWidth * 0.988) {
        x -= (x + showTimeRef.current.offsetWidth / 2) - window.innerWidth * 0.988;
      } else if (x - showTimeRef.current.offsetWidth / 2 < 0) {
        x += (showTimeRef.current.offsetWidth / 2 - x);
      }
  
      // Остальная логика по позиционированию showTimeRef
  
      showTimeRef.current.style.display = "inline-block";
      showTimeRef.current.style.left = `${x}px`;
  
      const time = formatTime((e.clientX / e.target.offsetWidth) * videoRef.current.duration + 1) 
      showTimeRef.current.innerHTML = time;
    }
  }

  const showTimeMouseMoveThrottle = throttle(showTimeMouseMove, 20)

  const hideTimeMouseMove = () => {
    if(showTimeRef.current) {
        showTimeRef.current.style.display = "none"
    }
  }

  // Изменение currentTime на то время, которое выбрал пользователь на тайм лайне
  const changeCurrentTimeRewind = (e: any) => {
    if (videoRef.current && timeLineRef.current) {
      videoRef.current.currentTime = (e.clientX / e.target.offsetWidth) * videoRef.current.duration
      updateCurrentWidth()
    }
  };

// Изменение масштаба
  // изменение масштаба при нажатии на кнопку
  const handleFullScreenChange = () => {
    toggleFullscreen()
  };

  // функция изменение масштаба
  const toggleFullscreen = () => {
    if (containerRef.current && videoRef.current) {
      if(document.fullscreenElement) {
        videoRef.current.className = "w-[100%] h-[82vh] bg-black"
        document.exitFullscreen();
      } else {
          videoRef.current.className = "w-[100%] h-[100%] bg-black"
          containerRef.current.requestFullscreen();
      }
    }
  };

// изменение масштаба при нажатии на клавишу "f"
  // нормально типизировать event
  const keyDownEvent = (e: any) => {
    e.preventDefault()
    if (videoRef.current) {
      switch (e.key) {
        case "f":
          toggleFullscreen()
          break;
        case "а":
          toggleFullscreen()
          break;
        case "ArrowRight":
          if (videoRef.current.currentTime < videoRef.current.duration - 10) {
            setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime += 10)))
            updateCurrentWidth()
          }
          break;
        case "ArrowLeft":
          if(videoRef.current.currentTime > 10) {
            setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime -= 10)))
            updateCurrentWidth()
          }
          break;
        case " ":
          handlePlayPause()
          break;
        default:
          break;
      }
    }
  }

// TimeLine
  // Форматирование currentTime и duration к виду 0:00
  const correctDisplayNumber = (number: number) => number < 10 ? `0${number}` : `${number}`

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${correctDisplayNumber(Math.floor(seconds % 60))}`
  }

  const updateCurrentTime = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime)));
    }
  };

  const updateCurrentWidth = () => {
    if (videoRef.current) {
      setCurrentWidth((Number(videoRef.current.currentTime) / Number(videoRef.current.duration) * 100).toString())
    }
  }

  // Обновление текущего времени и timeLineCurrent
  const updateCurrentParams = () => {
    updateCurrentTime()
    updateCurrentWidth()
  }

  // Функция которая позволяет обновлять текущее время и timeLineCurrent только раз в секунду, а не несколько раз в секунду
  const throttledUpdateCurrentParams = throttle(updateCurrentParams, 1000);

  function throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

// loader (когда видео не подгрузилось/не подгрузилось)
  const videoIsWaiting = () => {
    if (loaderRef.current) {
      loaderRef.current.style.display = "flex"
    }
  }

  const videoIsCanPlay = () => {
    if (loaderRef.current) {
      loaderRef.current.style.display = "none"
    }
  }

// settings
  const handleSettingsClickOutside = (e: any) => {
    e.preventDefault()
    if (!settingsInterfaceRef.current?.contains(e.target) && !settingsButtonRef.current?.contains(e.target) && !qualitySettngsInterfaceRef.current?.contains(e.target)) {
      setShowSettingsInterface(false)
    }
  };

  const handleVisibleSettingInterface = () => {
    if (settingsInterfaceRef.current) {
      setShowSettingsInterface(!showSettingsInterface)
    }
  }

  const backToSettingsInterface = (set: (value: SetStateAction<boolean>) => void, ref: RefObject<HTMLDivElement>) => {
    if (settingsInterfaceRef.current && ref.current) {
      setShowSettingsInterface(true)
      set(false)
    }
  }

  const goToSubSettingsInterface = (set: (value: SetStateAction<boolean>) => void, ref: RefObject<HTMLDivElement>) => {
    if (settingsInterfaceRef.current && ref.current) {
      setShowSettingsInterface(false)
      set(true)
    }
  }

  useEffect(() => {
    const resolution = getFromStorage("quality")
    resolution && setCurrentQuality(resolution)

    // Если в localStorage есть currentTime, то мы подставляем его
    const storageCurrentTime = getFromStorage(`${pathname}/currentTime`)
    if (storageCurrentTime && storageCurrentTime !== "0" && videoRef.current) {
      videoRef.current.currentTime = Number(storageCurrentTime)
    }

    // Устанавливаем duration полсе подгрузки метаданных у видео
    videoRef.current?.addEventListener("loadedmetadata", () => {
      setDuration(formatTime(Number(videoRef.current?.duration.toFixed())))

      if (currentTimeLineRef.current) {
        currentTimeLineRef.current.style.width = `${(Number(videoRef.current?.currentTime) / Number(videoRef.current?.duration) * 100).toString()}%`
      }
    })

    if (videoRef.current) {
      videoRef.current.addEventListener("click", handlePlayPause)
      videoRef.current.addEventListener('timeupdate', throttledUpdateCurrentParams);
      videoRef.current.addEventListener("waiting", videoIsWaiting)
      videoRef.current.addEventListener("canplay", videoIsCanPlay)
    }

    // Установка фокуса на containerRef при загрузки страницы и лобавление слушителя событие на нажатие клавиш
    if (containerRef.current) {
      containerRef.current.focus({preventScroll: true})
      containerRef.current.addEventListener("mousemove", throttleShowInterface)
      containerRef.current.addEventListener("mouseleave", checkIsHiddenInterface)
      containerRef.current.addEventListener("keydown", keyDownEvent)
    }

    document.addEventListener("click", handleSettingsClickOutside);

    return () => {
      if (videoRef.current && containerRef.current && videoToolRef.current) {
        videoRef.current.removeEventListener('click', handlePlayPause);
        videoRef.current.removeEventListener('timeupdate', throttledUpdateCurrentParams);
        videoRef.current.removeEventListener("waiting", videoIsWaiting)
        videoRef.current.removeEventListener("canplay", videoIsCanPlay)
        containerRef.current.removeEventListener("mousemove", throttleShowInterface)
        containerRef.current.removeEventListener("mouseleave", checkIsHiddenInterface)
        containerRef.current.removeEventListener("keydown", keyDownEvent)
        document.removeEventListener("click", handleSettingsClickOutside);
      }
    };
  }, [])

  useEffect(() => {
    // Добавление каждую секунду в localstorage currentTime
    setToStorage(`${pathname}/currentTime`, videoRef.current?.currentTime)

    // Изменение длины currentTimeLineRef каждую секунду на нужное значение (currentTime)
    if (currentTimeLineRef.current) {
      currentTimeLineRef.current.style.width = `${currentWidth}%`
    }
  }, [currentTime])

  useEffect(() => {
    const time = getFromStorage(`${pathname}/currentTime`)
    const resolution = getFromStorage("quality")

    videoRef.current?.load()
    if (videoRef.current && time) {
      videoRef.current.currentTime = Number(time)
    }
    
    resolution && setCurrentQuality(resolution)
    // videoRef.current?.play()
  }, [currentQuality])

  return (
    <div ref={videoToolRef} className={`${className} translate-y-[-5.2rem] ${isHiddenInterface ? "opacity-0" : "opacity-100"} ease-in transition-opacity`}>
      
      <div ref={loaderRef} className="absolute top-[-41vh] left-[46vw] hidden items-center justify-center w-[8.4rem] h-[8.4rem]"><Loader /></div>
      
      <div ref={settingsInterfaceRef} className={`${showSettingsInterface ? "absolute" : "hidden"} right-[.8rem] bottom-[5.2rem] w-[36.2rem] bg-gray-hover-card/80 py-[1rem] rounded-[.5rem]`}>
        <div onClick={() => goToSubSettingsInterface(setShowQualitySettingsInterface, qualitySettngsInterfaceRef)}>
          <VideoListSetting title="Разрешение" value={`${currentQuality}p`} />
        </div>
      </div>

      <VideoQualitySetting
        lists={quality}
        qualityActive={qualityActive}
        setQualityActive={setQualityActive}
        showQualitySettingsInterface={showQualitySettingsInterface}
        setShowQualitySettingsInterface={setShowQualitySettingsInterface}
        settingsInterfaceRef={settingsInterfaceRef}
        qualitySettngsInterfaceRef={qualitySettngsInterfaceRef}
        backToSettingsInterface={backToSettingsInterface} 
      />
      
      <button onClick={handlePlayPause} ref={iconMessagePlayPause} className={`${isPlayed ? "flex" : "hidden"} absolute top-[-41vh] left-[46vw] items-center justify-center w-[8.4rem] h-[8.4rem] bg-gray/60 rounded-[50%]`}><img className={"w-[3.2rem] h-[3.2rem] translate-x-[.4rem]"} src={"/images/Play.svg"} alt="play/pause message icon" /></button>
      
      <div ref={showTimeRef} className={`showTime hidden absolute bg-gray/80 py-[.4rem] px-[1rem] mr-[5rem] rounded-[.5rem] ${robotoMedium} text-lg text-white translate-y-[-2.5rem]`}>0:00</div>
      
      <div onMouseLeave={hideTimeMouseMove} onMouseMove={showTimeMouseMoveThrottle} onClick={changeCurrentTimeRewind} ref={timeLineRef} className='relative z-[2] flex flex-wrap items-end w-[100%] h-[2rem] cursor-pointer' >
        <div ref={currentTimeLineRef} className="w-[0%] h-[.3rem] bg-red z-[2] pointer-events-none"></div>
        <div className="w-[100%] h-[.3rem] bg-gray translate-y-[-1rem] pointer-events-none"></div>
      </div>

      <div className='flex items-center justify-between w-[100%] py-[.4rem] px-[2rem] bg-black/30 translate-y-[-1rem]'>
        
        <div className='flex items-center'>
          <button onClick={previousSeriesHandleClick} className="flex items-center justify-center w-[3.2rem] h-[3.4rem] mr-[.4rem]"><img className='w-[2.2rem] h-[2.2rem]' src="/images/PreviousSeriesIcon.svg" alt="previous series button" /></button>
          <button onClick={handlePlayPause} className="flex items-center justify-center w-[3.2rem] h-[3.4rem]"><img className='w-[1.8rem] h-[1.8rem]' src={isPlayed ? "/images/Play.svg" : "/images/Pause.svg"} alt="play/pause button" /></button>
          <button onClick={nextSeriesHandleClick} className="flex items-center justify-center w-[3.2rem] h-[3.4rem] mr-[1rem]"><img className='w-[2.2rem] h-[2.2rem]' src="/images/NextSeriesIcon.svg" alt="next series button" /></button>
          
          <div className='flex items-center ml-[1.6rem] mr-[2.4rem]'>
            <img onClick={handleVolumeChange} className="w-[2.2rem] h-[2rem] mr-[1rem] cursor-pointer" src={currentVolumeDisabled ? "/images/VolumeDisabled.svg" : "/images/Volume.svg"} alt="volume change icon" />
            <input ref={volumeRef} onChange={(e) => changeVolume(parseFloat(e.target.value))} className='w-[5.8rem] h-[.1rem] bg-white cursor-pointer' type="range" min={0} max={1} step={0.1}/>
          </div>

          <p className={`${robotoMedium} text-lg text-white`}>{(duration !== "0:00" && currentTime && !Number.isNaN(duration) && !Number.isNaN(currentTime)) ? `${currentTime} / ${duration}` : `0:00 / 0:00`}</p>
        </div>

        <div className="flex">
          <button ref={settingsButtonRef} onClick={handleVisibleSettingInterface} className="flex items-center justify-center w-[3.6rem] h-[2.4rem] mr-[1.1rem] cursor-pointer"><img className="w-[2.4rem] h-[2.4rem]" src="/images/VideoSettings.svg" alt="video settings" /></button>
          <button onClick={handleFullScreenChange} className='flex items-center justify-center w-[3.6rem] h-[2.4rem]'><img className="w-[2.2rem] h-[2.2rem]" src="/images/FullScreen.svg" alt="full screen button" /></button>
        </div>
      
      </div>
    </div>
  )
}

export default VideoTool