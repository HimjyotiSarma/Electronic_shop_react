import axios, { AxiosResponse } from 'axios'
// import { useEffect, useState } from 'react'
import { Product } from './types'

interface FetchProductsResponse {
  status: string
  message: string
  products: Product[]
}
interface FetchSingleProductResponse {
  status: string
  message: string
  product: Product
}

// const useProductFetch = (url: string) => {
//   const [data, setData] = useState<Product[]>([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const controller = new AbortController()

//     const handleFetch = async () => {
//       try {
//         setLoading(true)
//         setError(null)

//         const response: AxiosResponse<FetchResponse> = await axios.get(url, {
//           signal: controller.signal,
//         })

//         setData(response.data.products) // Update state with the `products` array
//       } catch (err) {
//         if (axios.isCancel(err)) {
//           console.log('Request cancelled:', err.message)
//         } else if (err instanceof AxiosError) {
//           setError(
//             err?.response?.data ||
//               err?.message ||
//               'Unknown Error when fetching data from API'
//           )
//         } else {
//           setError(
//             'Unknown Error Occured. Please check the request and try again'
//           )
//         }
//       } finally {
//         setLoading(false)
//       }
//     }

//     handleFetch()

//     return () => {
//       controller.abort() // Cancel the request on cleanup
//     }
//   }, [url]) // Add `url` as a dependency to refetch when it changes

//   return { data, loading, error } // Return the necessary states
// }

const getProducts = async (url: string) => {
  const response: AxiosResponse<FetchProductsResponse> = await axios.get(url)
  return response.data.products
}

const getSingleProduct = async (url: string) => {
  const response: AxiosResponse<FetchSingleProductResponse> = await axios.get(
    url
  )
  return response.data.product
}

export { getProducts, getSingleProduct }
