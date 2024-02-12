"use client"

import dynamic from "next/dynamic"

const RatingFilm = dynamic(() => import("@/UI/RatingFilm"))
const AboutColumnScrollY = dynamic(() => import("@/UI/column/AboutColumnScrollY"))

import SkeletonFilmBlock from "@/UI/skeleton/SkeletonFilmBlock"

import { useGetOnesAnimeQuery } from "@/redux/services/anime"
import { usePort } from "@/context/portContext"

import { robotoMedium } from "@/public/fonts"
import "./filmBlock.sass"

type Props = {
    id: number
}

const FilmBlock = ({ id }: Props) => {
  const { PORT } = usePort()
  const { data: anime, isLoading, isSuccess } = useGetOnesAnimeQuery({ id: id })

  return (
    <>
        {isLoading ? (
          <SkeletonFilmBlock></SkeletonFilmBlock>
        ) : isSuccess ? (
          <div className="film-block w-[82vw] mx-auto flex bg-black rounded-[1rem] px-[1.4rem] py-[1.4rem]">

            <div className="w-max h-min bg-[#2B2B2B] mr-[3.2rem] rounded-[.5rem]">
              <img className="w-[33.6rem] h-[45.5rem] p-[.6rem] rounded-[.5rem]" src={`${PORT}${anime?.data.attributes.image_webp.data.attributes.url}`} alt="card image" />
            </div>
        
            <div className="flex flex-col justify-between w-[65%]">
              <div>
                <h2 className={`inline-block ${robotoMedium} text-5xl text-white mb-[1.4rem]`}>{anime?.data.attributes.title}</h2>
                <p className="w text-2xl text-white mb-[1.2rem]">{anime?.data.attributes.description_short}</p>
                <AboutColumnScrollY title="Серий" info={`${anime?.data.attributes.series}`}></AboutColumnScrollY>
                <AboutColumnScrollY title="Длительность" info={`${anime?.data.attributes.time_of_series}`}></AboutColumnScrollY>
              </div>
        
              <div className="flex items-end justify-between">
                {anime && <RatingFilm rating={anime.data.attributes.rating} large={false}></RatingFilm>}
                <button className={`bg-white px-[6.2rem] py-[.7rem] rounded-[.5rem] ${robotoMedium} text-2xl text-black hover:translate-x-[1rem] ease-in-out transition-transform`}>Смотреть</button>
              </div>
            </div>
        
          </div>
        ) : (
          <SkeletonFilmBlock></SkeletonFilmBlock>
        )}
    </>
  )
}

export default FilmBlock