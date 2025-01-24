import { useParams } from 'react-router'
import '../styles/singleProduct.scss'
import { useQuery } from '@tanstack/react-query'
import { getSingleProduct } from '../utils/fetchData'
import Loader from '../components/Loader'

const SingleProduct = () => {
  const { productId } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: [`product_${productId}`],
    queryFn: () =>
      getSingleProduct(`https://fakestoreapi.in/api/products/${productId}`),
  })

  if (error != null) return <div className="error_data">{error.message}</div>
  if (isPending) return <Loader />

  const costPrice = data.discount
    ? Math.ceil(data.price / (1 - data.discount / 100))
    : ''

  console.log(data)
  return (
    <div className="single_product_page">
      <div className="left_image_section">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="right_product_info">
        <h1>{data.title}</h1>
        <div className="product_price_area">
          <span className="product_original_price">
            {costPrice ? `$${costPrice}` : ''}
          </span>
          <span className="product_selling_price">${data.price}</span>
          {data.discount && (
            <div className="product_discount_area">
              {data.discount}%
              <span className="product_price_discount_Off_txt">off</span>
            </div>
          )}
        </div>
        <div className="product_overview_section">
          {data.brand && (
            <p className="product_brand_info product_info">
              <b>Brand</b>
              {' :    '}
              {data.brand.toUpperCase()}
            </p>
          )}
          {data.model && (
            <p className="product_model_info product_info">
              <b>Model</b>
              {' :    '}
              {data.model.toUpperCase()}
            </p>
          )}
          {data.color && (
            <p className="product_color_info product_info">
              <b>Color</b>
              {' :    '}
              {data.color.toUpperCase()}
            </p>
          )}
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
          <button className="add_to_cart_btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default SingleProduct
