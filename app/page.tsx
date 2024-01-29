import FilterBtn from "@/UI/FilterBtn"
import Card from "@/components/Card"

export default function Home() {
  const lists = ["Все", "В тренде", "Новые"]

  const animePannels = [
    {
    imgSource: "berserk.webp",
    textPannels: "Берсерк (1997-1998)"
  }, {
    imgSource: "evangelion.jpg",
    textPannels: "Евангелион (1995-1996)"
  }, {
    imgSource: "evangelion death.jpg",
    textPannels: "Евангелион: Смерть и Перерождение (1997)" 
  }, {
    imgSource: "the end of evangelion.jpg",
    textPannels: "Конец Евангелиона (1997)" 
  }, {
    imgSource: "evangelion 1.11.webp",
    textPannels: "Евангелион 1.11: Ты (не) один (2007)" 
  }, {
    imgSource: "evangelion 2.22.webp",
    textPannels: "Евангелион 2.22: Ты (не) пройдешь (2009)" 
  }, {
    imgSource: "evangelion 3.33.webp",
    textPannels: "Евангелион 3.33: Ты (не) исправишь (2012)" 
  }, {
    imgSource: "evangelion 4.44.webp",
    textPannels: "Евангелион 3.0 + 1.01: Как-то раз (2021)" 
  },
]

  return (
    <div className="container_page">
      <div className="mb-[2rem] mt-[1.2rem]"><FilterBtn lists={lists} /></div>

      <div className="film-layout">
        {animePannels.map((pannel, i) => (
          <Card id={i} img={pannel.imgSource} text={pannel.textPannels} />
        ))}
      </div>

    </div>
  )
}
