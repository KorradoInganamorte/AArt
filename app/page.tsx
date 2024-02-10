"use client"

import CardScrollY from "@/components/CardScrollY"
import AboutColumnScrollY from "@/UI/AboutColumnScrollY"
import RatingFilm from "@/UI/RatingFilm"

import { robotoMedium } from "@/public/fonts"
import "./index.sass"

const page = () => {

  const urls = ["evangelion 3.33.webp", "evangelion 2.22.webp", "evangelion 1.11.webp", "berserk.webp", "evangelion.webp", "evangelion death.webp", "the end of evangelion.webp"]

  const aboutFilmScrollY = [{
    title: "Серий",
    info: "25"
  }, {
    title: "Длительность",
    info: "625 мин."
  }]

  const ratingPlace = ["Кинопоиск", "MyShows.me"]
  const rating = [{
    rating: "8.1",
    of: "10"
  }, {
    rating: "4.2",
    of: "5"
  }]

  return (
    <div className="gradient">
      <div className="relative flex justify-center bg-black mb-[4rem]">
        <img className="h-[90vh] w-[100%] mx-auto bg-black" src="/images/main.jpg" alt="background anime image" />
        <div className="gradient-img absolute left-0  h-[100%] bg-black/80 pl-[5rem] pr-[25rem] text-white">
          <h1 className={`${robotoMedium} text-7xl mt-[5.5rem] mb-[3.5rem]`}>Аниме года - <span className="text-8xl">Берсерк</span></h1>
          <p className={"max-w-[56.5rem] text-2xl mb-[2rem]"}>"Берсерк" — захватывающее путешествие в мире тьмы и мести, где смешиваются человеческие страхи и жестокость с магией и страстью в борьбе за выживание. Под покровом средневековой тьмы главный герой, воин по имени Гатц, одолевает внутренние демоны и внешние опасности в своём беспощадном стремлении к мести. Готовы ли вы погрузиться в этот уникальный и тёмный мир, где разгадываются глубины человеческой души и возрождается древнее волшебство?</p>
          <button className={`flex items-center bg-white py-[.8rem] px-[4.8rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть <img className="w-[2.8rem] ml-[2rem] group-hover:translate-x-[1.66rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
        </div>
      </div>

      <h3 className={`w-max mx-auto ${robotoMedium} text-5xl text-white mb-[2rem]`}>Классические аниме</h3>
      <div className="flex flex-col justify-center mb-[2.4rem]">
        <CardScrollY urls={urls}></CardScrollY>
      </div>

      <div className="film-block w-[82vw] mx-auto flex bg-black rounded-[1rem] px-[1.4rem] py-[1.4rem]">

        <div className="w-max h-min bg-[#2B2B2B] mr-[3.2rem] rounded-[.5rem]">
            <img className="w-[33.6rem] h-[45.5rem] p-[.6rem] rounded-[.5rem]" src="./images/berserk.webp" alt="card image" />
        </div>

        <div className="flex flex-col justify-between w-[65%]">
          <div>
            <h2 className={`inline-block ${robotoMedium} text-5xl text-white mb-[2rem]`}>Берсерк (1997-1998)</h2>
            <p className="w text-2xl text-white mb-[1.2rem]">"Берсерк" — захватывающее путешествие в мире тьмы и мести, где смешиваются человеческие страхи и жестокость с магией и страстью в борьбе за выживание. Под покровом средневековой тьмы главный герой, воин по имени Гатц, одолевает внутренние демоны и внешние опасности в своём беспощадном стремлении к мести. Готовы ли вы погрузиться в этот уникальный и тёмный мир, где разгадываются глубины человеческой души и возрождается древнее волшебство?</p>
              {aboutFilmScrollY.map((item, i) => (
                <AboutColumnScrollY key={i} title={item.title} info={item.info}></AboutColumnScrollY>
              ))}
          </div>

          <div className="flex items-end justify-between">
            <RatingFilm ratingPlace={ratingPlace} rating={rating} large={false}></RatingFilm>
            <button className={`bg-white px-[6.2rem] py-[.7rem] rounded-[.5rem] ${robotoMedium} text-2xl text-black hover:translate-x-[1rem] ease-in-out transition-transform`}>Смотреть</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page