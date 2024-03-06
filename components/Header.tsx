import Link from "next/link"

import { montserratSubrayada } from "@/public/fonts"

const Header = () => {

  return (
    <header className="flex items-center justify-between h-[5.6rem] bg-dark-gray phone-sm:px-[1.6rem] verticalphone:px-[2rem] horizontalphone:px-[2.4rem] tablet:px-[2.8rem] laptop:px-[3rem]">
      <Link href="/"><p className={`${montserratSubrayada} text-7xl text-red hover:scale-[1.1] ease-in-out transition-all`}>A</p></Link>
      <div className="flex">
        <Link href="/search"><img className="w-[2.4rem] h-[2.4rem] hover:scale-[1.1] mr-[2.8rem] ease-in-out transition-all" src="/images/Search_white.svg" alt="go to search page icon" /></Link>
        <Link href="/faq"><img className="w-[1.6rem] h-[2.4rem] hover:scale-[1.1] ease-in-out transition-all" src="/images/Question.svg" alt="go to faq page icon" /></Link>
      </div>
    </header>
  )
}

export default Header