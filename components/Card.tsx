import { robotoMedium } from "@/public/fonts"

type Props = {
    img: string
    text: string
    id?: number
}

const Card = ({ img, text }: Props) => {
  return (
    <div className="w-max px-[.4rem] py-[.6rem] pb-[1.2rem] rounded-[.5rem] hover:bg-gray-hover-card hover:translate-y-[-.66rem] cursor-pointer ease-in-out transition-all">
        <div className="w-max bg-[#2B2B2B] rounded-[.5rem]">
          <img className="w-[20.9rem] h-[28.4rem] p-[.4rem] mb-[.8rem] rounded-[.5rem]" src={`/images/${img}`} alt="card image" />
        </div>
        <h2 className={`max-w-[20.9rem] ${robotoMedium} text-3xl text-white`}>{text}</h2>
    </div>
  )
}

export default Card