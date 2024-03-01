"use client"

import Link from "next/link"

import RatingFilmAboutBlock from "@/UI/film/RatingFilmAboutBlock"
import AboutColumn from "@/UI/column/AboutColumn"

import SkeletonAboutBlock from "@/UI/skeleton/SkeletonAboutBlock"

import { usePort } from "@/context/portContext"
import { useGetOnesAnimeQuery } from "@/redux/services/anime"

import { robotoMedium } from "@/public/fonts"

type Props = {
    id: string
}

const FilmAboutBlock = ({ id }: Props) => {
  const { PORT } = usePort()
  const { data: anime, isLoading, isSuccess } = useGetOnesAnimeQuery({ id: id })

  return (
    <>
        {isLoading ? (
          <SkeletonAboutBlock />
            ) : isSuccess ? (
             <div className="px-[2rem] mb-[5.4rem]">
                <div className="flex">
                    <div className="flex flex-col w-[35.2rem] mr-[2.4rem]">
                        <img className="w-[35.2rem] h-[47.8rem] rounded-[.5rem] mb-[1.6rem]" src={`${PORT}${anime?.data.attributes.image_webp.data.attributes.url}`} alt="film image" />
                        <Link href={`/watch/${id}/1`} className={`flex justify-center items-center bg-white py-[1rem] mb-[2rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть<img className="w-[1rem] ml-[3.8rem] group-hover:translate-x-[1.2rem] transition-transform" src="/images/ArrowNext.svg" alt="watch now icon" /></Link>
                        <div className={`flex gap-x-[3.2rem] ${robotoMedium} text-3xl text-white`}>
                            {anime && <RatingFilmAboutBlock rating={anime.data.attributes.rating} />}
                        </div>
                    </div>
                    <div className="text-white mr-[3.6rem] monitor:mr-[8rem]">
                        <h2 className={`${robotoMedium} text-5xl mb-[1.2rem]`}>{anime?.data.attributes.title}</h2>
                        <p className="w-[34vw] large-text text-xl">{anime?.data.attributes.description}
                        </p>
                    </div>
                    <div className="flex flex-col w-[26vw] mt-[4.6rem]">
                        <p className={`${robotoMedium} text-2xl text-white mb-[1.2rem]`}>Об Аниме</p>
                        <div className="flex flex-col mb-[1.8rem]">
                            <AboutColumn title="Первый выпуск" info={`${anime?.data.attributes.first_issue}`} />
                            <AboutColumn title="Жанр" info={`${anime?.data.attributes.genre}`} />
                            <AboutColumn title="Страна" info={`${anime?.data.attributes.country}`} />
                            <AboutColumn title="Режиссер" info={`${anime?.data.attributes.director}`} />
                            <AboutColumn title="Время серии" info={`${anime?.data.attributes.time_of_series}`} />
                            <AboutColumn title="Время" info={`${anime?.data.attributes.time_all}`} />
                        </div>
                        <p className={`${robotoMedium} text-2xl text-white mb-[1.2rem]`}>Актеры</p>
                        <div className="flex flex-col">
                            {anime?.data.attributes.acters.map((item, i) => (
                                <AboutColumn key={i} title={item.character} info={item.acter} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <SkeletonAboutBlock />
        )}
    </>
  )
}

export default FilmAboutBlock