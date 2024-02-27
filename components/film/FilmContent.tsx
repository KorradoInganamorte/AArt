"use client"

import { useRouter } from "next/navigation"

import { useGetOnesAnimeQuery } from "@/redux/services/anime"

import SeriesFilterBtn from "@/UI/button/SeriesFilterBtn"
import SkeletonFilmContent from "@/UI/skeleton/SkeletonFilmContent"

import { robotoMedium } from "@/public/fonts"
import "./filmContent.sass"

type Props = {
    id: string
    series: string
}

const FilmContent = ({ id, series }: Props) => {
  const { data: anime, isLoading } = useGetOnesAnimeQuery({ id: id })
  const router = useRouter()

  const lists = []
  for (let i = 0; i < Number(anime?.data.attributes.series.split(" ")[0]); i++) {
    lists.push((i+1).toString())
  }

  const nextSeriesHandleClick = () => {
    router.push((Number(series) + 1).toString())
  }

  return (
    <>
        {isLoading ? (
            <SkeletonFilmContent />
        ) : anime && (
            <>
              <div className="container_page">

                <div className="flex justify-between mb-[1.6rem]">
                    <p className={`${robotoMedium} text-3xl text-white`}>{anime.data.attributes.title}. {series} серия</p>
                    {Number(series) < Number(anime?.data.attributes.series.split(" ")[0]) && <button onClick={nextSeriesHandleClick} className={`flex items-center bg-white py-[.8rem] px-[2rem] rounded-[.5rem] ${robotoMedium} text-xl text-black group`}>Следующая серия <img className="w-[.8rem] h-[1.3rem] ml-[2.4rem] group-hover:translate-x-[.6rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>}
                </div>

                <div className="bg-gray-hover-card rounded-[.5rem] mb-[4rem]">
                    <p className="px-[2rem] pt-[1rem] pb-[2rem] text-white text-xl">{anime?.data.attributes.description_short}</p>
                </div>

                <div className="flex flex-col">
                    <p className={`${robotoMedium} text-white text-2xl mb-[.4rem]`}>Все серии</p>
                    <div className="h-[0.1rem] bg-white mb-[1.6rem]"></div>

                    <div className="series-layout">
                        <SeriesFilterBtn lists={lists} series={series} />
                    </div>

                </div>

              </div>
            </>
        )}
    </>
  )
}

export default FilmContent