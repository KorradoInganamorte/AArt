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
        country: string
        producer: string
        series: string
        time_of_series: string
        time_all: string
        acters: Acters[]
        rating: Ratings[]
        category: string
        image_webp: Media
        image_jpg: Media
        videoURL: string
        video_trailer: Media
        video: Media
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