"use client"

import Link from "next/link"

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
                    <button className={`flex items-center justify-center w-[26.4rem] bg-white py-[.8rem] mb-[1rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть <img className="w-[1rem] h-[1.6rem] ml-[2rem] group-hover:translate-x-[1.66rem] ease-in transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
                    <Link href={`/anime`} className={`flex items-center justify-center w-[26.4rem] bg-red/60 hover:bg-red/80 py-[.6rem] rounded-[.5rem] text-2xl text-white ease-in transition-colors`}>Искать другие аниме</Link>
                </div>
            </>
        ) : (
            <SkeletonFilmOfTheYear />
        )}
    </div>
  )
}

export default FilmOfTheYear