"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const FilmBlock = dynamic(() => import("@/components/FilmBlock"))
const CardScrollY = dynamic(() => import("@/components/card/CardScrollY"))

const CardBlock = () => {
  const [isActive, setIsActive] = useState<number>(3)

  return (
    <>
      <div className="flex flex-col justify-center mb-[2.4rem]">
        <CardScrollY id={isActive} isActive={isActive} setIsActive={setIsActive}></CardScrollY>
      </div>

      <FilmBlock id={isActive + 1}></FilmBlock>
    </>
  )
}

export default CardBlock