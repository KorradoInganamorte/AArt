import { Acters, Ratings } from "./Information"
import { Media } from "./Media"

export interface Data {
    id: number
    attributes: {
        title: string
        description: string
        description_short: string
        first_issue: string
        genre: string
        category: string
        country: string
        director: string
        series: string
        time_of_series: string
        time_all: string
        acters: Acters[]
        rating: Ratings[]
        image_webp: Media
        url_yandex_object: string
    }
}

export interface Meta {
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    }
}