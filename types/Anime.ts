import { Media } from "./Media"
import { Data, Meta } from "./Meta"

export interface Animes {
    data: Data[]
    meta: Meta
}

export interface Anime {
    data: Data
    meta: Meta
}

export interface AnimeOfTheYear {
    data: {
        id: number
        attributes: {
            title: string
            description: string
            url: string
            img: Media
        }
    }
    meta: {}
}