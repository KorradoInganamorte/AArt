import Link from "next/link"

import { robotoMedium } from "@/public/fonts"

type Props = {
    image: string
    title: string
    description: string
    time: boolean
}

const CardFAQ = ({ image, title, description, time }: Props) => {
  return (
    <div className="flex flex-col justify-between w-[35.6rem] bg-gray-faq hover:bg-gray-hover-card ease-in transition-all px-[1.8rem] py-[1.6rem] mr-[2.4rem] last:mr-0 rounded-[1rem] text-white">
        <div>
            <div className="flex mb-[2rem]">
                <img className="w-max h-[3.2rem] mr-[2.8rem]" src={`/images/${image}.svg`} alt="varning icon" />
                <h4 className={`${robotoMedium} text-2xl`}>{title}</h4>
            </div>
            <p className="text-xl mb-[1.8rem]">{description}</p>
            {time && <p className={`${robotoMedium} text-xl mb-[3.6rem]`}>9:00 - 20:00 | время ответа 10 мин.</p>}
        </div>
        <div className="flex">
            <Link className="mr-[1.4rem]" href="https://t.me/authorDEV"><img className="w-[3.6rem] h-[3.6rem]" src="/images/Telegram.svg" alt="Telegram contacts icon" /></Link>
            <Link className="mr-[1.4rem]" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqrvgrXWwbgMhVsHWXJNrpFlmjgNjmZPdCWQGHRrmRCZCbsXfbDLsFzmdRNxsqtrQMJvd"><img className="w-[3.6rem] h-[3.6rem]" src="/images/Gmail.svg" alt="email contacts icon" /></Link>
            <Link href="https://github.com/KorradoInganamorte"><img className="w-[3.6rem] h-[3.6rem]" src="/images/Github.svg" alt="Github contacts icon" /></Link>
        </div>
    </div>
  )
}

export default CardFAQ