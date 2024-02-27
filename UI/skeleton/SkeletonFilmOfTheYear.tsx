import { robotoMedium } from "@/public/fonts"

const SkeletonFilmOfTheYear = () => {
  return (
    <>
    <div className="h-[90vh] w-[100%] mx-auto bg-black"></div>
    <div className="gradient-img absolute left-0  h-[100%] bg-black/80 pl-[5rem] pr-[25rem] text-white">
        <h1 className={`${robotoMedium} text-7xl mt-[5.5rem] mb-[3.5rem]`}>Аниме года - <span className="text-8xl">Берсерк</span></h1>
        <p className={"max-w-[56.5rem] text-2xl mb-[2rem]"}>"Берсерк" — захватывающее путешествие в мире тьмы и мести, где смешиваются человеческие страхи и жестокость с магией и страстью в борьбе за выживание. Под покровом средневековой тьмы главный герой, воин по имени Гатц, одолевает внутренние демоны и внешние опасности в своём беспощадном стремлении к мести. Готовы ли вы погрузиться в этот уникальный и тёмный мир, где разгадываются глубины человеческой души и возрождается древнее волшебство?</p>
        <button className={`flex items-center justify-center w-[26.4rem] bg-white py-[.8rem] mb-[1rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть <img className="w-[1rem] h-[1.6rem] ml-[2rem] group-hover:translate-x-[1.6rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
        <button className={`flex items-center justify-center w-[26.4rem] bg-red/60 py-[.6rem] rounded-[.5rem] text-2xl text-white`}>Искать другие аниме</button>
    </div>
</>
  )
}

export default SkeletonFilmOfTheYear