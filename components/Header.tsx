import Link from "next/link"

import { montserratSubrayada } from "@/public/fonts"

const Header = () => {

  return (
    <div className="flex items-center justify-between h-[5.6rem] bg-dark-gray phone-sm:px-[1.6rem] verticalphone:px-[2rem] horizontalphone:px-[2.4rem] tablet:px-[2.8rem] laptop:px-[3rem]">
      <p className={`${montserratSubrayada} text-7xl text-red`}>A</p>
      <div className="flex">
        <Link href="/anime"><img className="w-[2.4rem] h-[2.4rem] hover:scale-[1.1] mr-[2.8rem] ease-in-out transition-all" src="/images/Search_white.svg" alt="go to search page icon" /></Link>
        <Link href="/"><img className="w-[2.4rem] h-[2.4rem] hover:scale-[1.1] ease-in-out transition-all" src="/images/Home.svg" alt="go to home page icon" /></Link>
      </div>
    </div>
  )
}

export default Header