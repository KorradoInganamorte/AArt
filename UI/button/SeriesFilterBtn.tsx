import { useRouter } from "next/navigation"

import { robotoMedium } from "@/public/fonts"

type Props = {
    lists: string[]
    series: string
}

const SeriesFilterBtn = ({ lists, series }: Props) => {
    const router = useRouter()

    const handleClick = (i: number) => {
        router.push(`${i+1}`)
    }

  return (
    <>
        {lists.map((list, i) => (
            <div key={i} onClick={() => handleClick(i)} className={`flex justify-center ${Number(series)-1 === i ? "bg-white text-black" : "bg-gray text-white hover:bg-gray-hover-filter_btn"} py-[.7rem] px-[2.4rem] last:mr-0 rounded-[.5rem] ${robotoMedium} text-xl whitespace-nowrap cursor-pointer ease-in transition-colors`}>{list} серия</div>
        ))}
    </>
  )
}

export default SeriesFilterBtn