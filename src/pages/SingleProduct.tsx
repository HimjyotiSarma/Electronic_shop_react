import { useParams } from 'react-router'
import '../styles/singleProduct.scss'
import { useQuery } from '@tanstack/react-query'
import { getSingleProduct } from '../utils/fetchData'
import Loader from '../components/Loader'
import { useCartStore } from '../stores/cart/store'
import { toast } from 'sonner'

const SingleProduct = () => {
  const addToCart = useCartStore((state) => state.addToCart)
  const { productId } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: [`product_${productId}`],
    queryFn: () =>
      getSingleProduct(`https://fakestoreapi.com/products/${productId}`),
  })

  if (error) return <div className="error_data">{error.message}</div>
  if (isPending) return <Loader />

  const handleAddToCart = () => {
    toast.success('Added to Cart')
    addToCart(data)
  }

  return (
    <div className="single_product_page">
      <div className="left_image_section">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="right_product_info">
        <h1>{data.title}</h1>
        <div className="product_price_area">
          <span className="product_selling_price">${data.price}</span>
        </div>
        <div className="product_overview_section">
          <div className="review_section">
            <span className="rating">{data.rating.rate}</span>
            <span className="rating_count">{data.rating.count} ratings</span>
          </div>
          <p className="product_category_info product_info">
            <b>Category:</b> {data.category}
          </p>
        </div>
        {data.description && (
          <div className="product_description_section">
            <h5>About this Product:</h5>
            <ul>
              {data.description
                .split(/\r?\n/)
                .map((item_description, index) => (
                  <li className="item_description_line" key={index}>
                    {item_description}
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="add_to_cart_section">
          <button className="add_to_cart_btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
