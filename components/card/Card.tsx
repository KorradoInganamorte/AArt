"use client"

import Link from "next/link"

import { useGetAllAnimeQuery } from "@/redux/services/anime"
import { usePort } from "@/context/portContext"

import Skeleton from "@/UI/skeleton/Skeleton"

import { robotoMedium } from "@/public/fonts"
import "./card.sass"

type Props = {
  showDropdown: boolean
  active: string
  searchQuery: string
}

const Card = ({ showDropdown, active, searchQuery }: Props) => {
  const { PORT } = usePort()
  const { data: animes, isLoading, isSuccess } = useGetAllAnimeQuery({ sort: active })

  return (
    <div className="film-layout">
      {isLoading ? (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
      ) : (
        isSuccess ? (
          <>
            {animes.data.length > 0 ? animes?.data.filter(anime => anime.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())).map((anime) => (
              <Link href={`/about/${anime.id}`} key={anime.id} className={`w-max h-max px-[.8rem] py-[.6rem] pb-[1.8rem] rounded-[.8rem] hover:bg-black ${showDropdown ? "" : "hover:scale-[1.02]"} cursor-pointer ease-in-out transition-all`}>
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
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </>
        )
      )}
    </div>
  )
}

export default Card