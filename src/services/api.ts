import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../models/Restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getRestaurantMenu: builder.query<Restaurant, string>({
      query: (id) => `/${id}`
    })
  })
})

export default api

export const { useGetRestaurantsListQuery, useGetRestaurantMenuQuery } = api
