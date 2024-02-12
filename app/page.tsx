import CardBlock from "@/components/card/CardBlock"
import FilmOfTheYear from "@/components/FilmOfTheYear"

import { robotoMedium } from "@/public/fonts"
import "./index.sass"

const Home = () => {

  return (
    <div className="gradient">
      <FilmOfTheYear></FilmOfTheYear>

      <h3 className={`w-max mx-auto ${robotoMedium} text-5xl text-white mb-[2rem]`}>Классические аниме</h3>
      <CardBlock></CardBlock>
    </div>
  )
}

export default Home