"use client"

import { useState } from "react"

import FilmBlock from "@/components/film/FilmBlock"
import CardScrollY from "@/components/card/CardScrollY"

const CardBlock = () => {
  const [isActive, setIsActive] = useState<number>(0)

  return (
    <>
      <div className="mb-[2.4rem]">
        <CardScrollY id={isActive} isActive={isActive} setIsActive={setIsActive} />
      </div>

      <FilmBlock id={(isActive + 1).toString()} />
    </>
  )
}

export default CardBlock