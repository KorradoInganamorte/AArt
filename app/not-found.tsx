import Link from "next/link"

import { poppinsMedium, robotoMedium } from "@/public/fonts"

const NotFound = () => {
  return (
    <div className={`flex flex-col items-center justify-center h-[100vh] ${poppinsMedium} text-6xl text-gray`}>

      <div className="flex">
        <p><span className="text-red">THIS</span> PAGE WAS NOT FOUND</p>
        <div className="h-[5.8rem] w-[.1rem] bg-gray mx-[1.4rem]"></div>
        <p>THIS <span className="red">PAGE</span> WAS NOT FOUND</p>
      </div>

      <div className="flex items-center">
        <div className="w-[12rem] h-[.1rem] bg-gray mx-[1.4rem]"></div>
        <p><span className="text-red">404 ERROR</span> | THIS PAGE <span className="text-red">WAS</span> NOT FOUND</p>
        <div className="w-[12rem] h-[.1rem] bg-gray mx-[1.4rem]"></div>
      </div>

      <div className="flex mb-[3.6rem]">
        <p>THIS PAGE WAS <span className="text-red">NOT</span> FOUND</p>
        <div className="h-[5.8rem] w-[.1rem] bg-gray mx-[1.4rem]"></div>
        <p>THIS PAGE WAS NOT <span className="text-red">FOUND</span></p>
      </div>

      <Link href="/" className={`bg-red/70 hover:bg-red px-[7.8rem] py-[.4rem] rounded-[.5rem] ${robotoMedium} text-black text-5xl ease-in transition-colors bg-no-repeat bg-[length:1.6rem_1.8rem] bg-[top_.4rem_right_.4rem] bg-[url('/images/TopRightArrow.svg')]`}>На главную</Link>

    </div>
  )
}

export default NotFound