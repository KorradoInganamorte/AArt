"use client"

// import useWindowDimensions from "@/lib/hooks/useWindowDimensions"
import { montserratSubrayada } from "@/public/fonts"

const Header = () => {
  // let isMobile = false
  // if (useWindowDimensions() === "Mobile") {
  //   isMobile = true
  // }

  return (
    <div className="flex items-center h-[5.6rem] bg-dark-gray px-[3rem]">
      <p className={`${montserratSubrayada} text-7xl text-red pr-[18.6rem]`}>A</p>
      <input className="flex items-center py-[.6rem] pl-[2rem] pr-[40.05rem] text-xl border border-gray bg-white/0 rounded-[1rem] focus:outline-none placeholder:text-gray-placeholder bg-no-repeat bg-[length:2rem_2rem] bg-[center_right_2rem] bg-[url('/images/Search.svg')]" type="text" placeholder="Искать Аниме..." />
    </div>
  )
}

export default Header