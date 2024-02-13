"use client"

import Link from "next/link"

import { useGetAllAnimeQuery } from "@/redux/services/anime"
import { usePort } from "@/context/portContext"

import Skeleton from "@/UI/skeleton/Skeleton"

import { robotoMedium } from "@/public/fonts"
import "./card.sass"

type Props = {
  active: string
}

const Card = ({ active }: Props) => {
  const { PORT } = usePort()
  const { data: animes, isLoading, isSuccess } = useGetAllAnimeQuery({ sort: active })

  return (
    <>
      {isLoading ? (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i}></Skeleton>
        ))}
      </>
      ) : (
        isSuccess ? (
          <>
            {animes.data.length > 0 ? animes?.data.map((anime) => (
              <Link href={`/about/${anime.id}`} key={anime.id} className="w-max px-[1rem] py-[.6rem] pb-[1.8rem] rounded-[.8rem] hover:bg-black hover:translate-y-[-.66rem] cursor-pointer ease-in-out transition-all">
                <div className="w-max bg-[#2B2B2B] rounded-[.5rem]">
                  <img className="w-[20.9rem] h-[28.4rem] p-[.4rem] mb-[.8rem] rounded-[.5rem]" src={`${PORT}${anime.attributes.image_webp.data.attributes.url}`} alt="card image" />
                </div>
                <h2 className={`max-w-[20.9rem] ${robotoMedium} text-3xl text-white`}>{anime.attributes.title}</h2>
              </Link>
            )) : (
              <div className="absolute w-[96vw] h-[60vh] mx-auto flex items-center justify-center bg-dark-gray">
                <p className={`${robotoMedium} text-5xl text-white`}>В этой категории ничего не найдено</p>
              </div>
            )}
          </>
        ) : (
        <>
          {animes?.data.map((_, i) => (
            <Skeleton key={i}></Skeleton>
          ))}
        </>
        )
      )}
    </>
  )
}

export default Card