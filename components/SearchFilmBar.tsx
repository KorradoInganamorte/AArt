import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import useDebounce from "@/lib/hooks/useDebounce";
import { useGetAllAnimeQuery } from "@/redux/services/anime";

import { Data } from "@/types/Anime";

import { robotoMedium } from "@/public/fonts";

type Props = {
    setSearchQuery: Dispatch<SetStateAction<string>>
}

const SearchFilmBar = ({ setSearchQuery }: Props) => {
    const { data: animes } = useGetAllAnimeQuery({ sort: "Все" })

    const dropdownRef = useRef<HTMLDivElement>(null)

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("")

    const value = useDebounce(search, 600)

    const handleClickDropdownList = (anime: Data) => {
        setSearchQuery(anime.attributes.title)
        setSearch(anime.attributes.title)
        setShowDropdown(false)
    }

    const handleClickOutside = (e: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setShowDropdown(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <div ref={dropdownRef}>
        <input onClick={() => setShowDropdown(true)} value={search} onChange={e => setSearch(e.target.value)} className="w-[100%] flex items-center mx-auto py-[.6rem] pl-[2rem] pr-[6rem] text-xl text-white border border-gray bg-white/0 rounded-[1rem] focus:outline-gray-placeholder focus:outline placeholder:text-gray-placeholder bg-no-repeat bg-[length:2rem_2rem] bg-[center_right_2rem] bg-[url('/images/Search.svg')]" type="text" placeholder="Искать Аниме..." />
        {showDropdown && (
          <div className="relative z-[2] w-[100%] mt-[.2rem] py-[1.8rem] bg-gray-search_dropdown rounded-[1rem]">
            {animes?.data.slice(0, 8).filter(anime => anime.attributes.title.toLowerCase().includes(value.toLowerCase())).map(anime => (
              <div onClick={() => handleClickDropdownList(anime)} key={anime.id} className="flex justify-between items-center w-[100%] hover:bg-gray pl-[2rem] pr-[2.6rem] my-[.4rem] last:mb-0  ease-in-out transition-colors">
                <p className={`${robotoMedium} text-xl text-white py-[.4rem]`}>{anime.attributes.title}</p>
                <img className="w-[1.7rem] h-[1.6rem]" src="/images/Search_white.svg" alt="search icon" />
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default SearchFilmBar