import { Product } from '../utils/types'
import { motion } from 'framer-motion'
import styles from '../styles/modules/popularProductCard.module.scss'
import { useNavigate } from 'react-router'

interface ProductCardType {
  data: Product
}

const PopularItemsCard = ({ data }: ProductCardType) => {
  const navigate = useNavigate()

  return (
    <motion.div
      className={styles.popularCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        transition: { duration: 0.2 },
      }}
      onClick={() => navigate(`/products/${data.id}`)}
    >
      <div className={styles.imageContainer}>
        <img
          src={data.image}
          alt={data.title}
          className={styles.popularImage}
        />
      </div>

      <div className={styles.popularContent}>
        <h3 className={styles.popularTitle}>
          {data.title.length > 25
            ? `${data.title.substring(0, 25)}...`
            : data.title}
        </h3>

        <div className={styles.popularDetails}>
          <div className={styles.ratingSection}>
            <span className={styles.rating}>
              ⭐ {data.rating.rate} ({data.rating.count})
            </span>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.popularPrice}>
              ${data.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PopularItemsCard
