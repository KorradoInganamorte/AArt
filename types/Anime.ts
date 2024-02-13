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

interface Data {
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
        video?: Media
    }
}

interface Acters {
    character: string
    acter: string
}

interface Ratings {
    platform: string
    rating: string
    of: string
}

export interface Media {
    data: {
        id: number
        attributes: {
            name: string
            url: string
        }
    }
}

interface Meta {
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    }
}