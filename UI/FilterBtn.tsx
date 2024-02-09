"use client"

import { useState } from "react"

import { robotoMedium } from "@/public/fonts"

type Props = {
  lists: string[]
}

const FilterBtn = ({ lists }: Props) => {
  const [isActive, setActive] = useState<number>(0)

  const handleClick = (i: number) => {
    setActive(i)
  }

  return (
    <>
      {lists.map((list, i) => (
        <div key={i} onClick={() => handleClick(i)} className={`inline-block ${isActive === i ? "bg-white text-black" : "bg-gray text-white hover:bg-gray-hover-filter_btn"} py-[.6rem] px-[1.6rem] mr-[1.6rem] last:mr-0 rounded-[.5rem] ${robotoMedium} text-lg cursor-pointer ease-in transition-colors`}>{list}</div>
      ))}
    </>
  )
}

export default FilterBtn