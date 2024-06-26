"use client"

import dynamic from "next/dynamic"
import { Dispatch, SetStateAction } from "react"

import { usePort } from "@/context/portContext"
import { useGetAllAnimeQuery } from "@/redux/services/anime"

const SkeletonScrollY = dynamic(() => import("@/UI/skeleton/SkeletonScrollY"))

type Props = {
    id: number
    isActive: number
    setIsActive: Dispatch<SetStateAction<number>>
}

const CardScrollY = ({ isActive, setIsActive }: Props) => {
  const { PORT } = usePort()
  const { data: animes, isLoading } = useGetAllAnimeQuery({ sort: "Классические" })

  const handleClick = (i: number) => {
    setIsActive(i)
  }
  
  return (
    <div className="flex items-end">
      {isLoading ? (
      Array.from({ length: 3 }).map((_, i) => (
        <SkeletonScrollY key={i} />
      ))
      ) : (
        <>
          {animes?.data.map((anime, i) => (
            <div key={i} className="flex-shrink-0 w-max h-min bg-[#2B2B2B] mx-[.9rem] mb-[.6rem] rounded-[.5rem] cursor-pointer">
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