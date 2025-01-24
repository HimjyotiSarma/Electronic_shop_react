import { Product } from '../utils/types'
import { motion } from 'motion/react'
import styles from '../styles/modules/productCard.module.scss'
import { useNavigate } from 'react-router'

interface ProductCardType {
  data: Product
}
const ProductCard = ({ data }: ProductCardType) => {
  const navigate = useNavigate()
  const costPrice = data.discount
    ? Math.ceil(data.price / (1 - data.discount / 100))
    : ''
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 2 },
      }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',

        transition: { duration: 0.3 },
      }}
      onClick={() => {
        navigate(`${data.id}`)
      }}
    >
      <img src={data.image} alt={data.title} />
      <div className={styles.product_info}>
        <h3>
          {data.title.length > 20
            ? data.title.substring(0, 20) + '...'
            : data.title}
        </h3>
        <div className={styles.price_section}>
          <span className={styles.original_price}>
            {costPrice ? `$${costPrice}` : ''}
          </span>
          <span className={styles.selling_price}>${data.price}</span>
          {data.discount && (
            <div className={styles.discount_area}>
              {data.discount}%
              <span className={styles.price_discount_Off_txt}>off</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
export default ProductCard
