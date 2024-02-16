"use client"

import { usePort } from "@/context/portContext"
import { useGetAnimeOfTheYearQuery } from "@/redux/services/anime"

import SkeletonFilmOfTheYear from "@/UI/skeleton/SkeletonFilmOfTheYear"

import { robotoMedium } from "@/public/fonts"

const FilmOfTheYear = () => {
  const { PORT } = usePort()
  const { data: anime, isLoading, isSuccess } = useGetAnimeOfTheYearQuery("")

  return (
    <div className="relative flex justify-center bg-black mb-[4rem]">
        {isLoading ? (
            <SkeletonFilmOfTheYear />
        ) : isSuccess ? (
            <>
                <img className="h-[90vh] w-[100%] mx-auto bg-black" src={`${PORT}${anime?.data.attributes.img.data.attributes.url}`} alt="background anime image" />
                <div className="gradient-img absolute left-0  h-[100%] bg-black/80 pl-[5rem] pr-[25rem] text-white">
                    <h1 className={`${robotoMedium} text-7xl mt-[5.5rem] mb-[3.5rem]`}>Аниме года - <span className="text-8xl">{anime?.data.attributes.title}</span></h1>
                    <p className={"max-w-[56.5rem] text-2xl mb-[2rem]"}>{anime?.data.attributes.description}</p>
                    <button className={`flex items-center bg-white py-[.8rem] px-[4.8rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть <img className="w-[2.8rem] ml-[2rem] group-hover:translate-x-[1.66rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
                </div>
            </>
        ) : (
            <SkeletonFilmOfTheYear />
        )}
    </div>
  )
}

export default FilmOfTheYear