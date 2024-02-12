import { robotoMedium } from "@/public/fonts"

type Props = {
  rating: {
    platform: string
    rating: string
    of: string
  }[]
  large: boolean
}

const RatingFilm = ({ rating, large }: Props) => {

  return (
    <div className={`flex items-center ${large ? `${robotoMedium} gap-x-[3.2rem] text-3xl` : "gap-x-[7.8rem] text-2xl"} text-white`}>
      <div>
        {rating.map((item, i) => (
          <p key={i} className={`${large ? "mb-[1.4rem]" : "mb-[1rem]"} text-gray-item-card last:mb-0`}>{item.platform}</p>
        ))}
      </div>
      <div>
        {rating.map((item, i) => (
          <p key={i} className={`${large ? "text-5xl mb-[.4rem]" : "text-4xl mb-0"}`}>{item.rating} <span className={`${large ? "text-2xl" : "text-xl"}`}>из {item.of}</span></p>
        ))}
      </div>
    </div>
  )
}

export default RatingFilm