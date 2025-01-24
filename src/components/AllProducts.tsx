import { getProducts } from '../utils/fetchData'
import { Product } from '../utils/types'
import Loader from './Loader'
import ProductCard from './ProductCard'
import { useQuery } from '@tanstack/react-query'
import '../styles/allProducts.scss'

const AllProducts = () => {
  // const { data, loading, error } = useProductFetch(
  //   'https://fakestoreapi.in/api/products?limit=50'
  // )

  const { isPending, error, data } = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => getProducts('https://fakestoreapi.in/api/products?limit=50'),
  })
  if (error != null) {
    return <div className="error_data">{error.message}</div>
  }
  if (isPending) {
    return <Loader />
  }
  return (
    <div className="all_products_data">
      {data.map((product: Product) => (
        <ProductCard data={product} />
      ))}
    </div>
  )
}

export default AllProducts
