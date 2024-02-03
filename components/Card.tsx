import { robotoMedium } from "@/public/fonts"

type Props = {
    img: string
    text: string
    id?: number
}

const Card = ({ img, text }: Props) => {
  return (
    <div className="px-[1.2rem] py-[1rem] pt-[1.2rem] rounded-[.5rem] hover:bg-gray-hover-card hover:translate-y-[-.66rem] cursor-pointer ease-in-out transition-all">
        <img className="w-[100%] verticalphone:h-[69.62%] mb-[.8rem] rounded-[.5rem]" src={`/images/${img}`} alt="card image" />
        <h2 className={`max-w-[20.9rem] ${robotoMedium} text-3xl text-white`}>{text}</h2>
    </div>
  )
}

export default Card