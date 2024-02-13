"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const FilterBtn = dynamic(() => import("@/UI/button/FilterBtn"))
const Card = dynamic(() => import("@/components/card/Card"))

import "./index.sass"

const page = () => {
  const [isActive, setIsActive] = useState<number>(0)
  const lists = ["Все", "В тренде", "Новые", "Классические"]

  const active = lists[isActive]

  return (
    <div className="container_page">

      <div className="mb-[1.2rem] mt-[1.2rem]">
        <FilterBtn lists={lists} isActive={isActive} setIsActive={setIsActive} />
      </div>

      <div className="film-layout">
        <Card active={active}></Card>
      </div>
      
    </div>
  )
}

export default page