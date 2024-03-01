import CardBlock from "@/components/card/CardBlock"
import FilmOfTheYear from "@/components/film/FilmOfTheYear"

import { poppinsMedium, robotoMedium } from "@/public/fonts"
import "./index.sass"
import Link from "next/link"

const Home = () => {

  return (
    <div className="gradient">
      <FilmOfTheYear />

      <h3 className={`w-max mx-auto ${poppinsMedium} text-5xl text-white mb-[2rem]`}>Классические аниме</h3>
      <CardBlock />

      <h3 className={`w-max mx-auto ${poppinsMedium} text-5xl text-white mb-[2rem] mt-[10.2rem]`}>Ищите своё любимое аниме среди множества других</h3>
      <div className="flex items-center justify-center w-[100%] h-[67.8rem] bg-[length:100%_100%] bg-[center] bg-[url('/images/cardAllBlock.webp')]">
        <Link href="/search" className={`flex items-center justify-center w-[64.6rem] bg-white py-[.8rem] rounded-[.5rem] ${robotoMedium} text-3xl text-black hover:translate-y-[-.5rem] ease-in-out transition-transform`}>Искать аниме</Link>
      </div>
      <div className="w-[100%] h-[6.4rem]"></div>
    </div>
  )
}

export default Home