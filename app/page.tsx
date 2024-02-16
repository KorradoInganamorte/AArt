import CardBlock from "@/components/card/CardBlock"
import FilmOfTheYear from "@/components/film/FilmOfTheYear"

import { robotoMedium } from "@/public/fonts"
import "./index.sass"

const Home = () => {

  return (
    <div className="gradient">
      <FilmOfTheYear />

      <h3 className={`w-max mx-auto ${robotoMedium} text-5xl text-white mb-[2rem]`}>Классические аниме</h3>
      <CardBlock />
    </div>
  )
}

export default Home