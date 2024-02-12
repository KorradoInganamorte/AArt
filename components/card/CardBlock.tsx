"use client"

import { useState } from "react"

import FilmBlock from "../FilmBlock"
import CardScrollY from "./CardScrollY"

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