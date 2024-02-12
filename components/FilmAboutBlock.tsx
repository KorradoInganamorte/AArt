"use client"

import RatingFilm from "@/UI/RatingFilm"
import AboutColumn from "@/UI/column/AboutColumn"

import { usePort } from "@/context/portContext"
import { useGetOnesAnimeQuery } from "@/redux/services/anime"

import { robotoMedium } from "@/public/fonts"

const FilmAboutBlock = () => {
    const { PORT } = usePort()
    const { data: anime, isLoading } = useGetOnesAnimeQuery({ id: 1})

  const aboutAnime = [
    {
        title: "Первый выпуск",
        info: "1995 год"
    }, 
    {
        title: "Жанр",
        info: "Аниме, фантастика"
    }, 
    {
        title: "Страна",
        info: "Япония"
    }, 
    {
        title: "Продюсер",
        info: "Хидэаки Анно"
    }, 
    {
        title: "Время серии",
        info: "~26 мин."
    }, 
    {
        title: "Время",
        info: "624 мин."
    }, 
  ]

  const actors = [
    {
        title: "Синдзи Икари",
        info: "Мэгуми Огата"
    }, 
    {
        title: "Мисато Кацураги",
        info: "Котоно Мицуиси"
    }, 
    {
        title: "Рей Аянами/Юи Икари",
        info: "Мэгуми Хаясибара"
    }, 
    {
        title: "Аска Ленгли",
        info: "Юко Миямура"
    }
  ]

  const ratingPlace = ["Кинопоиск", "MyShows.me"]
  const rating = [{
    rating: "8.1",
    of: "10"
  }, {
    rating: "4.2",
    of: "5"
  }]

  return (
    <div className="px-[2rem] mb-[5.4rem]">
        <div className="flex">
            <div className="flex flex-col w-[35.2rem] mr-[1.4rem] laptop:mr-[2.4rem]">
                <img className="w-[35.2rem] h-[47.8rem] rounded-[.5rem] mb-[1.6rem]" src={`${PORT}${anime?.data.attributes.image_jpg.data.attributes.url}`} alt="film image" />
                <button className={`flex justify-center items-center bg-white py-[1rem] mb-[2rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть<img className="w-[2.5rem] ml-[2.6rem] group-hover:translate-x-[1.66rem] transition-transform" src="/images/ArrowNext.svg" alt="watch now icon" /></button>
                <div className={`flex gap-x-[3.2rem] ${robotoMedium} text-3xl text-white`}>
                    {anime && <RatingFilm rating={anime.data.attributes.rating} large></RatingFilm>}
                </div>
            </div>
            <div className="text-white mr-[3.6rem] monitor:mr-[8rem]">
                <h2 className={`${robotoMedium} text-5xl mb-[1.2rem]`}>Евангелион (1995-1996)</h2>
                <p className="w-[34vw] large-text text-xl">2015 год, Токио-3. 15 лет назад произошёл Второй удар, в результате чего Антарктида растаяла, Землю накрыла глобальная катастрофа, и большая часть человечества погибла. Теперь планету атакуют Ангелы — загадочные существа, противостоять которым могут только созданные с помощью биотехнологий гигантские роботы серии «Евангелион». <br></br> <br></br> 14-летний Синдзи Икари направлялся на встречу с отцом, руководителем влиятельной организации NERV, когда Токио-3 подвергся нападению Ангела. С помощью капитана Мисато Кацураги парень добирается до подземной штаб-квартиры NERV и единственное, что он хочет сказать отцу — как сильно его ненавидит. Но на месте выясняется, что Синдзи должен прямо сейчас залезть в робота и сражаться с Ангелом.
                </p>
            </div>
            <div className="flex flex-col mt-[6.2rem] w-[26vw]">
                <p className={`${robotoMedium} text-2xl text-white mb-[1.2rem]`}>Об Аниме</p>
                <div className="flex flex-col mb-[1.8rem]">
                    <AboutColumn title="Первый выпуск" info={`${anime?.data.attributes.first_issue}`}></AboutColumn>
                    <AboutColumn title="Жанр" info={`${anime?.data.attributes.genre}`}></AboutColumn>
                    <AboutColumn title="Страна" info={`${anime?.data.attributes.country}`}></AboutColumn>
                    <AboutColumn title="Режиссер" info={`${anime?.data.attributes.producer}`}></AboutColumn>
                    <AboutColumn title="Время серии" info={`${anime?.data.attributes.time_of_series}`}></AboutColumn>
                    <AboutColumn title="Время" info={`${anime?.data.attributes.time_all}`}></AboutColumn>
                </div>
                <p className={`${robotoMedium} text-2xl text-white mb-[1.2rem]`}>Актеры</p>
                <div className="flex flex-col">
                    {anime?.data.attributes.acters.map((item, i) => (
                        <AboutColumn key={i} title={item.character} info={item.acter}></AboutColumn>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilmAboutBlock