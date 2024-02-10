import { Anime, Animes, Media } from '@/types/Anime'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337'}),
  endpoints: (builder) => ({
    getAllAnime: builder.query<Animes, string /* {sort:string} */>({
      query: (/* { sort } */) => `/api/animes?populate[rating]=*&populate[acters]=*&populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_jpg][fields][0]=name&populate[image_jpg][fields][1]=url&populate[video_trailer][fields][0]=name&populate[video_trailer][fields][1]=url&populate[video][fields][0]=name&populate[video][fields][1]=url`,
    }),
    getOnesAnime: builder.query<Anime, {id: string}>({
      query: ({ id }) =>  `/api/animes?populate[rating]=*&populate[acters]=*&populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_jpg][fields][0]=name&populate[image_jpg][fields][1]=url&populate[video_trailer][fields][0]=name&populate[video_trailer][fields][1]=url&populate[video][fields][0]=name&populate[video][fields][1]=url`
    }),
    getImagesOnly: builder.query<Media[], void>({
      query: () => `/api/animes?populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_jpg][fields][0]=name&populate[image_jpg][fields][1]=url&populate[video_trailer][fields][0]=name&populate[video_trailer][fields][1]=url&populate[video][fields][0]=name&populate[video][fields][1]=url`,
      transformResponse: (response: Animes) => {
        return response.data.map(anime => anime.attributes.image_webp);
      }
    })
  }),
})

export const { useGetAllAnimeQuery, useGetOnesAnimeQuery } = animeApi