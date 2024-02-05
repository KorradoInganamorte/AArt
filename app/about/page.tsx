import { robotoMedium, robotoRegular } from "@/public/fonts"

import "./index.sass"
import AboutColumn from "@/UI/AboutColumn"
import VideoPlayer from "@/components/VideoPlayer"
import Fragment from "@/UI/Fragment"

const page = () => {
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

  const fragments = ["fragment1.webp", "fragment2.webp", "fragment3.webp", "fragment4.webp"]

  return (
    <div className="container_page">
        <div className="bg-[#B1B1B1]/5 pt-[1.6rem] mt-[1.2rem] rounded-[.5rem]">

            <div className="px-[1.2rem] laptop:px-[2rem] mb-[5.4rem]">
                <div className="flex">
                    <div className="flex flex-col w-[35.2rem] mr-[1.4rem] laptop:mr-[2.4rem]">
                        <img className="w-[35.2rem] h-[47.8rem] rounded-[.5rem] mb-[1.6rem]" src="/images/evangelion.jpg" alt="film image" />
                        <button className={`flex justify-center items-center bg-white py-[1rem] mb-[2rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black group`}>Смотреть<img className="w-[2.5rem] ml-[2.6rem] group-hover:translate-x-[1.66rem] transition-transform" src="/images/ArrowNext.svg" alt="watch now icon" /></button>
                        <div className={`flex gap-x-[3.2rem] ${robotoMedium} text-3xl text-white`}>
                            <div>
                                <p className="mb-[1rem]">Кинопоиск</p>
                                <p>MyShows.me</p>
                            </div>
                            <div>
                                <p className="mb-[1rem]">8.1 <span className={`${robotoRegular} text-2xl`}>из 10</span></p>
                                <p>4.2 <span className={`${robotoRegular} text-2xl`}>из 5</span></p>
                            </div>
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
                            {aboutAnime.map((item, i) => (
                                <AboutColumn key={i} title={item.title} info={item.info}></AboutColumn>
                            ))}
                        </div>
                        <p className={`${robotoMedium} text-2xl text-white mb-[1.2rem]`}>Актеры</p>
                        <div className="flex flex-col">
                            {actors.map((item, i) => (
                                <AboutColumn key={i} title={item.title} info={item.info}></AboutColumn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mb-[3.8rem]">
                <p className={`${robotoMedium} text-6xl text-white mb-[3.4rem]`}>Смотреть Трейлер</p>
                <VideoPlayer></VideoPlayer>
            </div>

            <div className="px-[1.4rem] laptop:px-[2.4rem]">
                <div className="fragment-layout">
                    {fragments.map((url, i) => (
                        <Fragment key={i} url={url}></Fragment>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page