import { useQuery } from '@tanstack/react-query'
import { getPopularProducts } from '../utils/fetchData'
import popular_Product_banner from '../assets/images/slides/popular_products_banner.png'
import '../styles/popularProducts.scss'
import Loader from './Loader'
// import ProductCard from './ProductCard'
import PopularItemsCard from './PopularItemsCard'

const PopularProducts = () => {
  // Consist of a Left Asdvertisement Section and a Right Section of Polular Section
  const { error, isPending, data } = useQuery({
    queryKey: ['popular_items'],
    queryFn: () => getPopularProducts('https://fakestoreapi.com/products'),
  })
  if (error) return <div className="error_data">{error.message}</div>
  if (isPending) return <Loader />

  return (
    <section className="popular_products_section">
      <div className="left_banner_section">
        <img src={popular_Product_banner} alt="" />
      </div>
      <div className="right_popular_product_section">
        <h4>Our Popular Products</h4>
        <div className="popular_products">
          {data.map((item) => {
            return <PopularItemsCard data={item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}
export default PopularProducts
