type Props = {
  rating: {
    platform: string
    rating: string
    of: string
  }[]
}

const RatingFilmBlock = ({ rating }: Props) => {

  return (
    <div className="flex items-center gap-x-[7.8rem] text-2xl text-white">
      <div>
        {rating.map((item, i) => (
          <p key={i} className="mb-[1rem] last:mb-0 text-gray-item-card">{item.platform}</p>
        ))}
      </div>
      <div>
        {rating.map((item, i) => (
          <p key={i} className="text-4xl mb-0">{item.rating} <span className="text-xl">из {item.of}</span></p>
        ))}
      </div>
    </div>
  )
}

export default RatingFilmBlock