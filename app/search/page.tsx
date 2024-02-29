"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const FilterBtn = dynamic(() => import("@/UI/button/FilterBtn"))
const Card = dynamic(() => import("@/components/card/Card"))
const SearchFilmBar = dynamic(() => import("@/components/film/SearchFilmBar"))

import "./index.sass"

const Page = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isActive, setIsActive] = useState<number>(0)
  const lists = ["Все", "В тренде", "Новые", "Классические"]

  const active = lists[isActive]

  return (
    <div className="container_page">

      <div className="absolute translate-x-[50%] translate-y-[-5.8rem] w-[60rem]">
        <SearchFilmBar showDropdown={showDropdown} setShowDropdown={setShowDropdown} setSearchQuery={setSearchQuery} />
      </div>

      <div className="mb-[1rem] mt-[1.6rem]">
        <FilterBtn lists={lists} isActive={isActive} setIsActive={setIsActive} />
      </div>

      <div className="film-layout">
        <Card showDropdown={showDropdown} active={active} searchQuery={searchQuery} />
      </div>
      
    </div>
  )
}

export default Page