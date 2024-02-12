"use client"

import { usePort } from "@/context/portContext"
import { useGetAnimeOfTheYearQuery } from "@/redux/services/anime"

import { robotoMedium } from "@/public/fonts"

const FilmOfTheYear = () => {
  const { PORT } = usePort()
  const { data: anime, isLoading } = useGetAnimeOfTheYearQuery("")

  return (
    <div className="relative flex justify-center bg-black mb-[4rem]">
        {isLoading ? (
            <>
                <div className="h-[90vh] w-[100%] mx-auto bg-black"></div>
                <div className="gradient-img absolute left-0  h-[100%] bg-black/80 pl-[5rem] pr-[25rem] text-white">
                    <h1 className={`${robotoMedium} text-7xl mt-[5.5rem] mb-[3.5rem]`}>Аниме года - <span className="text-8xl leading-none">アニメ</span></h1>
                    <p className={"max-w-[56.5rem] text-2xl mb-[2rem] leading-none"}>ダウンロードが進行中で、しばらく待ってください , で、しばらく待ってください ダウードが進行中で、しばらく待ってください ダウン待ってください ダウンロードが進行中で、しばらく待ってください. 進行中で、しばらく待ってください , で、しばらく待ってください ダウードが進行中で、しばらく待ってください ダウン待ってください ダウンロードが進行中で、しばらく待ってください, ダウンロードが進行中で、しばらく待ってください , で、しばらく待ってください ダウードが進行中で、しばらく待ってください ダウン待ってください ダウン ダウン待ってください ダウンロード ください , で、しばらく待, ダウンロードが進行中で、しばらく待ってください </p>
                    <button className={`flex items-center bg-white py-[.8rem] px-[4.8rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть <img className="w-[2.8rem] ml-[2rem] group-hover:translate-x-[1.66rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
                </div>
            </>
        ) : (
            <>
                <img className="h-[90vh] w-[100%] mx-auto bg-black" src={`${PORT}${anime?.data.attributes.img.data.attributes.url}`} alt="background anime image" />
                <div className="gradient-img absolute left-0  h-[100%] bg-black/80 pl-[5rem] pr-[25rem] text-white">
                    <h1 className={`${robotoMedium} text-7xl mt-[5.5rem] mb-[3.5rem]`}>Аниме года - <span className="text-8xl">{anime?.data.attributes.title}</span></h1>
                    <p className={"max-w-[56.5rem] text-2xl mb-[2rem]"}>{anime?.data.attributes.description}</p>
                    <button className={`flex items-center bg-white py-[.8rem] px-[4.8rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть <img className="w-[2.8rem] ml-[2rem] group-hover:translate-x-[1.66rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
                </div>
            </>
        )}
    </div>
  )
}

export default FilmOfTheYear