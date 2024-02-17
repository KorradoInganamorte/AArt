"use client"

import { useState } from "react"

import FilmBlock from "@/components/film/FilmBlock"
import CardScrollY from "@/components/card/CardScrollY"

const CardBlock = () => {
  const [isActive, setIsActive] = useState<number>(0)

  return (
    <>
      <div className="flex flex-col justify-center mb-[2.4rem]">
        <CardScrollY id={isActive} isActive={isActive} setIsActive={setIsActive} />
      </div>

      <FilmBlock id={isActive + 1} />
    </>
  )
}

export default CardBlock