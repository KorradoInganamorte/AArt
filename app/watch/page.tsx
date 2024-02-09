import dynamic from "next/dynamic"

import { robotoMedium } from "@/public/fonts"

const SeriesFilterBtn = dynamic(() => import("@/UI/SeriesFilterBtn"))
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"))

const page = () => {
  const lists = ["1 серия", "2 серия", "3 серия", "4 серия", "5 серия", "6 серия", "7 серия", "8 серия", "9 серия", "10 серия", "11 серия", "12 серия", "13 серия", "14 серия", "15 серия", "16 серия", "17 серия", "18 серия", "19 серия", "20 серия", "21 серия", "22 серия", "23 серия", "24 серия", "25 серия", "26 серия", ]

  return (
    <>
        <VideoPlayer />
        <div className="container_page translate-y-[-4rem]">
            <div className="flex justify-between mb-[1.6rem]">
                <p className={`${robotoMedium} text-3xl text-white`}>Евангелион (1995-1996)</p>
                <button className={`flex items-center bg-white py-[.8rem] px-[1.8rem] rounded-[.5rem] ${robotoMedium} text-xl text-black group`}>Следующая серия <img className="w-[1.8rem] ml-[1rem] group-hover:translate-x-[.66rem] transition-transform" src="/images/ArrowNext.svg" alt="next series icon" /></button>
            </div>
            <div className="bg-gray-hover-card rounded-[.5rem] mb-[4rem]">
                <p className="px-[2rem] pt-[1rem] pb-[2rem] text-white text-xl">2015 год. Токио-3. 15 лет назад произошёл Второй удар, в результате чего Антарктида растаяла, Землю накрыла глобальная катастрофа, и большая часть человечества погибла. Теперь планету атакуют Ангелы — загадочные существа, противостоять которым могут только созданные с помощью биотехнологий гигантские роботы серии «Евангелион».</p>
            </div>
            <div className="flex flex-col">
                <p className={`${robotoMedium} text-white text-2xl mb-[.4rem]`}>Все серии</p>
                <div className="h-[0.1rem] bg-white mb-[1.6rem]"></div>
                <div className="series-layout">
                    <SeriesFilterBtn lists={lists} />
                </div>
            </div>
        </div>
    </>
  )
}

export default page