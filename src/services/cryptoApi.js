import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '227899c975msh11673a41f08d4e8p1a88e3jsn1c0bce9a92b5'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
    url, headers:cryptoApiHeaders
})

export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
})
export const {
    useGetCryptosQuery,
} = cryptoApi