"use client"

import { useGetAllAnimeQuery } from "@/redux/services/anime"
import { usePort } from "@/context/portContext"

import Skeleton from "@/UI/skeleton/Skeleton"

import { robotoMedium } from "@/public/fonts"
import "./card.sass"

const Card = () => {
  const { PORT } = usePort()
  const { data: animes, isLoading, isSuccess } = useGetAllAnimeQuery("")

  return (
    <div className="film-layout">
      {isLoading ? (
      Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i}></Skeleton>
      ))
      ) : (
        isSuccess ? (
          <>
            {animes?.data.map((anime) => (
              <div key={anime.id} className="w-max px-[1rem] py-[.6rem] pb-[1.8rem] rounded-[.8rem] hover:bg-black hover:translate-y-[-.66rem] cursor-pointer ease-in-out transition-all">
                <div className="w-max bg-[#2B2B2B] rounded-[.5rem]">
                  <img className="w-[20.9rem] h-[28.4rem] p-[.4rem] mb-[.8rem] rounded-[.5rem]" src={`${PORT}${anime.attributes.image_webp.data.attributes.url}`} alt="card image" />
                </div>
                <h2 className={`max-w-[20.9rem] ${robotoMedium} text-3xl text-white`}>{anime.attributes.title}</h2>
              </div>
            ))}
          </>
        ) : (
        <>
          {animes?.data.map((anime, i) => (
            <Skeleton key={i}></Skeleton>
          ))}
        </>
        )
      )}
    </div>
  )
}

export default Card