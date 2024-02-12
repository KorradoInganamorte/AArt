"use client"

import AboutColumnScrollY from "@/UI/column/AboutColumnScrollY"
import RatingFilm from "@/UI/RatingFilm"

import { useGetOnesAnimeQuery } from "@/redux/services/anime"
import { usePort } from "@/context/portContext"

import { robotoMedium } from "@/public/fonts"
import "./filmBlock.sass"

type Props = {
    id: number
}

const FilmBlock = ({ id }: Props) => {
    const { PORT } = usePort()
    const { data: anime, isLoading } = useGetOnesAnimeQuery({ id: id})

  return (
    <>
        {isLoading ? (
              <div className="film-block w-[82vw] mx-auto flex bg-black rounded-[1rem] px-[1.4rem] py-[1.4rem]">

                <div className="w-[33.6rem] h-[45.5rem] p-[.6rem] bg-gray-hover-card mr-[3.2rem] rounded-[.5rem]"></div>
            
                <div className="flex flex-col justify-between w-[65%]">
                  <div className="mb-[2.4rem]">
                    <div className="w-[32.5rem] h-[3.4rem] bg-gray-hover-card mb-[1.4rem] rounded-[.2rem]"></div>
                    <div className="w-[100%] h-[25.6rem] bg-gray-hover-card rounded-[.5rem] mb-[1.2rem]"></div>
                    <div className="w-[21.6rem] h-[2rem] bg-gray-hover-card rounded-[.2rem] mb-[1rem]"></div>
                    <div className="w-[21.6rem] h-[2rem] bg-gray-hover-card rounded-[.2rem]"></div>
                  </div>
            
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                        <div className="w-[28.4rem] h-[2.4rem] bg-gray-hover-card rounded-[.2rem] mb-[1.6rem]"></div>
                        <div className="w-[28.4rem] h-[2.4rem] bg-gray-hover-card rounded-[.2rem]"></div>
                    </div>
                    <div className="w-[22rem] h-[4.6rem] bg-gray-hover-card rounded-[.5rem]"></div>
                  </div>
                </div>
            
              </div>
        ) : (
          <div className="film-block w-[82vw] mx-auto flex bg-black rounded-[1rem] px-[1.4rem] py-[1.4rem]">

            <div className="w-max h-min bg-[#2B2B2B] mr-[3.2rem] rounded-[.5rem]">
              <img className="w-[33.6rem] h-[45.5rem] p-[.6rem] rounded-[.5rem]" src={`${PORT}${anime?.data.attributes.image_webp.data.attributes.url}`} alt="card image" />
            </div>
        
            <div className="flex flex-col justify-between w-[65%]">
              <div>
                <h2 className={`inline-block ${robotoMedium} text-5xl text-white mb-[1.4rem]`}>{anime?.data.attributes.title}</h2>
                <p className="w text-2xl text-white mb-[1.2rem]">{anime?.data.attributes.description}</p>
                <AboutColumnScrollY title="Серий" info={`${anime?.data.attributes.series}`}></AboutColumnScrollY>
                <AboutColumnScrollY title="Длительность" info={`${anime?.data.attributes.time_of_series}`}></AboutColumnScrollY>
              </div>
        
              <div className="flex items-end justify-between">
                {anime && <RatingFilm rating={anime.data.attributes.rating} large={false}></RatingFilm>}
                <button className={`bg-white px-[6.2rem] py-[.7rem] rounded-[.5rem] ${robotoMedium} text-2xl text-black hover:translate-x-[1rem] ease-in-out transition-transform`}>Смотреть</button>
              </div>
            </div>
        
          </div>
        )}
    </>
  )
}

export default FilmBlock