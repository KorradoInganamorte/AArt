import { Dispatch, SetStateAction } from "react"

import { robotoMedium } from "@/public/fonts"

type Props = {
    lists: string[]
    series: number
    setSeries: Dispatch<SetStateAction<number>>
}

const SeriesFilterBtn = ({ lists, series, setSeries }: Props) => {

    const handleClick = (i: number) => {
        setSeries(i)
    }

  return (
    <>
        {lists.map((list, i) => (
            <div key={i} onClick={() => handleClick(i)} className={`flex justify-center ${series === i ? "bg-white text-black" : "bg-gray text-white hover:bg-gray-hover-filter_btn"} py-[.7rem] px-[2.4rem] last:mr-0 rounded-[.5rem] ${robotoMedium} text-xl whitespace-nowrap cursor-pointer ease-in transition-colors`}>{list} серия</div>
        ))}
    </>
  )
}

export default SeriesFilterBtn