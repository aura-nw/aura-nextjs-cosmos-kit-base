import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOG_API_KEY = 'live_KhCE9srgKY72tPtWCDSzb08PdXrdNXa08T7Y3tHY8Qvv13UVarPZkfm4eQbijIVd'

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOG_API_KEY)
      return headers
    }
  }),
  endpoints(builder) {
    return {
      getBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        }
      })
    }
  }
})


export const { useGetBreedsQuery } = apiSlice
