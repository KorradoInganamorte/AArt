"use client"

import { robotoMedium } from "@/public/fonts"
import { useState } from "react"

type Props = {
    lists: string[]
}

const SeriesFilterBtn = ({ lists }: Props) => {
    const [isActive, setActive] = useState<number>(0)

    const handleClick = (i: number) => {
        setActive(i)
    }

  return (
    <>
        {lists.map((list, i) => (
            <div key={i} onClick={() => handleClick(i)} className={`flex justify-center ${isActive === i ? "bg-white text-black" : "bg-gray text-white hover:bg-gray-hover-filter_btn"} py-[.6rem] px-[2.4rem] last:mr-0 rounded-[.5rem] ${robotoMedium} text-xl whitespace-nowrap cursor-pointer ease-in transition-colors`}>{list}</div>
        ))}
    </>
  )
}

export default SeriesFilterBtn