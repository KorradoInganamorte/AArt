"use client"

import { useEffect, useRef, useState } from "react"

import { usePort } from "@/context/portContext"
import { useGetAllAnimeQuery } from "@/redux/services/anime"

import SkeletonScrollY from "@/UI/skeleton/SkeletonScrollY"

type Props = {
    urls: string[]
}

const CardScrollY = () => {
  const { PORT } = usePort()
  const { data: animes, isLoading, isSuccess } = useGetAllAnimeQuery("")

  const [isActive, setActive] = useState<number>(3)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (i: number) => {
    setActive(i)
  }

  useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollLeft = (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 2
    }
  }, []);
  
  return (
    <div ref={containerRef} className="core flex items-end overflow-x-scroll">
      {isLoading ? (
      Array.from({ length: 7 }).map((_, i) => (
        <SkeletonScrollY key={i}></SkeletonScrollY>
      ))
      ) : (
        <>
          {animes?.data.map((anime, i) => (
            <div key={i} className="flex-shrink-0 w-max h-min bg-[#2B2B2B] mx-[.9rem] mb-[.6rem] rounded-[.5rem]">
              <img onClick={() => handleClick(i)} className={`${isActive === i ? "w-[24.2rem] h-[32.8rem]" : "w-[20.9rem] h-[28.4rem]"} p-[.4rem] rounded-[.5rem] ease-in-out transition-all`} src={`${PORT}${anime.attributes.image_webp.data.attributes.url}`} alt="card image" />
            </div>
          ))}
        </>
        )
      }
    </div>
  )
}

export default CardScrollY