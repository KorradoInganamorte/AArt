import { Anime, AnimeOfTheYear, Animes, Media } from '@/types/Anime'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337'}),
  endpoints: (builder) => ({
    getAllAnime: builder.query<Animes, {sort:string}>({
      query: ({ sort }) => `/api/animes?${sort !== "Все" ? `filters[category]=${sort}` : ""}&populate[rating]=*&populate[acters]=*&populate[category]=*&populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_jpg][fields][0]=name&populate[image_jpg][fields][1]=url&populate[video_trailer][fields][0]=name&populate[video_trailer][fields][1]=url&populate[video][fields][0]=name&populate[video][fields][1]=url`,
    }),
    getOnesAnime: builder.query<Anime, {id: number}>({
      query: ({ id }) =>  `/api/animes/${id}?populate[rating]=*&populate[acters]=*&populate[category]=*&populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_jpg][fields][0]=name&populate[image_jpg][fields][1]=url&populate[video_trailer][fields][0]=name&populate[video_trailer][fields][1]=url&populate[video][fields][0]=name&populate[video][fields][1]=url`
    }),
    getAnimeOfTheYear: builder.query<AnimeOfTheYear, string /* {id: string} */>({
      query: (/* { id } */) =>  `/api/anime-of-the-year?fields[0]=title&fields[1]=description&fields[2]=url&populate[img][fields][0]=name&populate[img][fields][1]=url`
    })
  }),
})

export const { useGetAllAnimeQuery, useGetOnesAnimeQuery, useGetAnimeOfTheYearQuery } = animeApi