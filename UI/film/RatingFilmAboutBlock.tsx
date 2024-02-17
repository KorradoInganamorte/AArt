import { robotoMedium } from "@/public/fonts"

type Props = {
  rating: {
    platform: string
    rating: string
    of: string
  }[]
}

const RatingFilmAboutBlock = ({ rating }: Props) => {

  return (
    <div className={`flex items-center ${robotoMedium} gap-x-[3.2rem] text-2xl text-white`}>
      <div>
        {rating.map((item, i) => (
          <p key={i} className="mb-[1.2rem] last:mb-0 text-gray-item-card">{item.platform}</p>
        ))}
      </div>
      <div>
        {rating.map((item, i) => (
          <p key={i} className="text-4xl">{item.rating} <span className="text-xl">из {item.of}</span></p>
        ))}
      </div>
    </div>
  )
}

export default RatingFilmAboutBlock