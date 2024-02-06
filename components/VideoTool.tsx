import { RefObject, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { getFromStorage, setToStorage } from "@/lib/localStorage"

import { robotoMedium } from "@/public/fonts"
import "./videoTool.sass"

type Props = {
    className?: string
    videoRef: RefObject<HTMLVideoElement>
    containerRef: RefObject<HTMLDivElement>
}

const Video = ({ className, videoRef, containerRef }: Props) => {
  const pathname = usePathname()

  const [isPlayed, setIsPlayed] = useState<boolean>(true)
  const [isHiddenInterface, setIsHiddenInterface] = useState<boolean>(false)

  const [currentWidth, setCurrentWidth] = useState<string>("0");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:00");

  const videoToolRef = useRef<HTMLDivElement>(null);
  const iconMessagePlayPause = useRef<HTMLDivElement>(null);
  const timeLineRef = useRef<HTMLInputElement>(null)
  const currentTimeLineRef = useRef<HTMLDivElement>(null)
  const showTimeRef = useRef<HTMLDivElement>(null)

  // Изменение громкости видео
  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value
    }
  };

  // Изменение состояния просмотра видео (пауза/воспроизвведение)
  const handlePlayPause = () => {
    if (videoRef.current) {
      setIsHiddenInterface(false)
      hiddenInterfaceTimeout(videoRef.current.paused)
      if (videoRef.current.paused) {
        setIsPlayed(false)
        iconMessagePlayPause.current?.classList.remove("opacity-100")
        iconMessagePlayPause.current?.classList.add("opacity-0")
        videoRef.current.play();
      } else {
        iconMessagePlayPause.current?.classList.remove("opacity-0")
        iconMessagePlayPause.current?.classList.add("opacity-100")
        setIsPlayed(true)
        videoRef.current.pause();
      }
    }
  };

// Показ/Скрытие VideoTool
  // MouseLeave
  const checkIsHiddenInterface = () => {
    if(videoRef.current && !videoRef.current.paused) {
      setIsHiddenInterface(true)
    } else {
      setIsHiddenInterface(false)
    }
  }

  // MouseOver
  const showInterface = () => {
    // hiddenInterfaceTimeout()
  }

  const hiddenInterfaceTimeout = (paused: boolean | undefined) => {
    if (paused) {
      const id = setTimeout(() => {
        setIsHiddenInterface(true)
        clearTimeout(id)
      }, 3800)
    } else {
      setIsHiddenInterface(false)
    }
  }

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
    hiddenInterfaceTimeout(!videoRef.current?.paused)
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
            setIsHiddenInterface(false)
            updateCurrentWidth()
            hiddenInterfaceTimeout(!videoRef.current.paused)
          }
          break;
        case "ArrowLeft":
          if(videoRef.current.currentTime > 10) {
            setCurrentTime(formatTime(Math.ceil(videoRef.current.currentTime -= 10)))
            setIsHiddenInterface(false)
            updateCurrentWidth()
            hiddenInterfaceTimeout(!videoRef.current.paused)
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
      setCurrentWidth((Number(videoRef.current?.currentTime) / Number(videoRef.current?.duration) * 100).toString())
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
  // 

  useEffect(() => {
    // Если в localStorage есть currentTime, то мы подставляем его
    const storageCurrentTime = getFromStorage(`${pathname}/currentTime`)
    if (storageCurrentTime && storageCurrentTime !== "0:00" && videoRef.current) {
      videoRef.current.currentTime = Number(storageCurrentTime)
      updateCurrentWidth()
    }

    // устанавливаем duration и currentTime сразу при загрузки страницы (а не через секунду как в случаи с currentTime), если они есть
    if (videoRef.current?.currentTime && videoRef.current?.duration) {
      updateCurrentTime()
      setDuration(formatTime(Number(videoRef.current?.duration.toFixed())))
    }

    // Устанавливаем duration полсе подгрузки метаданных у видео (в коде выше, при загрузке страницы может быть NaN из-за того что видео не устпело подгрузится)
    videoRef.current?.addEventListener("loadedmetadata", () => {
      setDuration(formatTime(Number(videoRef.current?.duration.toFixed())))
    })

    if (videoToolRef.current) {
      videoToolRef.current.addEventListener('mouseleave', checkIsHiddenInterface);
    }

    if (videoRef.current) {
      videoRef.current.addEventListener("click", handlePlayPause)
      videoRef.current.addEventListener('timeupdate', throttledUpdateCurrentParams);
      videoRef.current.addEventListener("mousemove", showInterface)
      // videoRef.current.addEventListener("mouseleave", checkIsHiddenInterface)
    }

    // Установка фокуса на containerRef при загрузки страницы и лобавление слушителя событие на нажатие клавиш
    if (containerRef.current) {
      containerRef.current.focus({preventScroll: true})
      containerRef.current.addEventListener("keydown", keyDownEvent)
    }

    return () => {
      if (videoRef.current && containerRef.current && videoToolRef.current) {
        videoToolRef.current.removeEventListener('mouseleave', checkIsHiddenInterface);
        videoRef.current.removeEventListener('click', handlePlayPause);
        videoRef.current.removeEventListener('timeupdate', throttledUpdateCurrentParams);
        videoRef.current.removeEventListener("mousemove", checkIsHiddenInterface)
        containerRef.current.removeEventListener("mouseover", showInterface)
        containerRef.current.removeEventListener("keydown", keyDownEvent)
      }
    };
  }, [])

  // Добавление каждую секунду в localstorage currentTime
  useEffect(() => {
    setToStorage(`${pathname}/currentTime`, videoRef.current?.currentTime)
  }, [videoRef.current?.currentTime])

  // Изменение длины currentTimeLineRef каждую секунду на нужное значение (currentTime)
  useEffect(() => {
    if (currentTimeLineRef.current) {
      currentTimeLineRef.current.style.width = `${currentWidth}%`
    }
  }, [videoRef.current?.currentTime])
  
  return (
    <div ref={videoToolRef} className={`${className} translate-y-[-5.6rem] ${isHiddenInterface ? "opacity-0" : "opacity-100"} ease-in transition-opacity`}>
      <div ref={iconMessagePlayPause} className='absolute top-[-40vh] left-[46vw] flex items-center justify-center w-[8.4rem] h-[8.4rem] bg-gray/60 rounded-[50%] opacity-0 ease-in transition-opacity'><img className={`${isPlayed ? "w-[3.2rem] h-[3.2rem] translate-x-[.4rem]" : "w-[3.2rem] h-[3.8rem]"}`} src={isPlayed ? "/images/Play.svg" : "/images/Pause.svg"} alt="play/pause message icon" /></div>
      <div ref={showTimeRef} className={`showTime hidden absolute bg-gray/80 py-[.4rem] px-[1rem] rounded-[.5rem] ${robotoMedium} text-lg text-white translate-y-[-2.5rem]`}>0:00</div>
      <div onMouseLeave={hideTimeMouseMove} onMouseMove={showTimeMouseMove} onClick={changeCurrentTimeRewind} ref={timeLineRef} className='flex flex-wrap items-end w-[100%] h-[1rem] cursor-pointer' >
        <div ref={currentTimeLineRef} className="w-[0%] h-[.2rem] bg-red translate-y-[.5rem] pointer-events-none"></div>
        <div className="w-[100%] h-[.1rem] bg-gray pointer-events-none"></div>
      </div>
      <div className='flex items-center justify-between w-[100%] py-[.6rem] px-[3rem] bg-black/30'>
        
        <div className='flex items-center'>
          <button onClick={handlePlayPause} className="flex items-center justify-center w-[3.4rem] h-[3.4rem]"><img className='w-[1.6rem] h-[1.8rem]' src={isPlayed ? "/images/Play.svg" : "images/Pause.svg"} alt="play/pause button" /></button>
          
          <div className='flex items-center ml-[1.6rem] mr-[2.4rem]'>
            <img className='w-[1.8rem] h-[1.6rem] mr-[1rem]' src="/images/Volume.svg" alt="" />
            <input onChange={(e) => handleVolumeChange(parseFloat(e.target.value))} className='w-[5.8rem] h-[.1rem] bg-white cursor-pointer' type="range" min={0} max={1} step={0.1}/>
          </div>

          <p className={`${robotoMedium} text-lg text-white`}>{duration !== "0:00" && currentTime ? `${currentTime} / ${duration}` : `0:00 / 0:00`}</p>
        </div>

        <button onClick={handleFullScreenChange} className='w-[2.2rem] h-[2.2rem]'><img src="/images/FullScreen.svg" alt="full screen button" /></button>
      </div>
    </div>
  )
}

export default Video