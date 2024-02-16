import Link from "next/link"

import { montserratSubrayada } from "@/public/fonts"

const Header = () => {

  return (
    <div className="flex items-center justify-between h-[5.6rem] bg-dark-gray phone-sm:px-[1.6rem] verticalphone:px-[2rem] horizontalphone:px-[2.4rem] tablet:px-[2.8rem] laptop:px-[3rem]">
      <p className={`${montserratSubrayada} text-7xl text-red`}>A</p>
      <Link href="/"><img className="w-[2.4rem] h-[2.4rem] hover:w-[2.5rem] hover:h-[2.5rem] ease-in-out transition-all" src="/images/Home.svg" alt="go to home page icon" /></Link>
    </div>
  )
}

export default Header