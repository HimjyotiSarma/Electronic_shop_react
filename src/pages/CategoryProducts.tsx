import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { getProducts } from '../utils/fetchData'
import Loader from '../components/Loader'
import '../styles/allProducts.scss'
import { Product } from '../utils/types'
import ProductCard from '../components/ProductCard'

const CategoryProducts = () => {
  const { category_name } = useParams()
  const { isPending, error, data } = useQuery({
    queryKey: [`product-${category_name}`],
    queryFn: () =>
      getProducts(
        `https://fakestoreapi.com/products/category/${category_name}`
      ),
  })

  if (isPending) return <Loader />
  if (error) return <div className="error_data">{error.message}</div>
  return (
    <div className="all_products_data">
      {data.map((product: Product) => (
        <ProductCard data={product} />
      ))}
    </div>
  )
}
export default CategoryProducts
