import { montserratSubrayada } from "@/public/fonts"
import Link from "next/link"

const Header = () => {

  return (
    <div className="flex items-center justify-between h-[5.6rem] bg-dark-gray phone-sm:px-[1.6rem] verticalphone:px-[2rem] horizontalphone:px-[2.4rem] tablet:px-[2.8rem] laptop:px-[3rem]">
      <p className={`${montserratSubrayada} text-7xl text-red`}>A</p>
      <input className="flex items-center py-[.6rem] pl-[2rem] pr-[40.05rem] text-xl text-white border border-gray bg-white/0 rounded-[1rem] focus:outline-none placeholder:text-gray-placeholder bg-no-repeat bg-[length:2rem_2rem] bg-[center_right_2rem] bg-[url('/images/Search.svg')]" type="text" placeholder="Искать Аниме..." />
      <Link href="/"><img className="w-[2.4rem] h-[2.4rem]" src="/images/Home.svg" alt="go to home page icon" /></Link>
    </div>
  )
}

export default Header