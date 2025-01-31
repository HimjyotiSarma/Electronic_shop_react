// import { CartItem } from '../utils/types'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import styles from '../styles/modules/cartItem.module.scss'
import { SingleCartItemType } from '../utils/types'
import { useCartStore } from '../stores/cart/store'
const SingleCartItem = ({ item }: SingleCartItemType) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const incrementCartQuantity = useCartStore(
    (state) => state.incrementCartQuantity
  )
  const decrementCartQuantity = useCartStore(
    (state) => state.decrementCartQuantity
  )
  return (
    <div className={styles.cart_item_section}>
      <div className={styles.cart_item_info}>
        <img src={item.image} alt={item.title} />
        <div className={styles.cart_item_details}>
          <h3 className={styles.cart_item_name}>{item.title}</h3>
          <h5>Catogory: {item.category}</h5>
          {/* <h5>Brand: {item.brand.toUpperCase()}</h5> */}
        </div>
      </div>
      <div className={styles.cart_item_price}>{item.price}</div>
      <div className={styles.cart_item_quantity}>
        <button type="button" onClick={() => decrementCartQuantity(item.id)}>
          -
        </button>
        {item.quantity}
        <button type="button" onClick={() => incrementCartQuantity(item.id)}>
          +
        </button>
      </div>
      <div className={styles.cart_item_total_price}>
        ${item.quantity * item.price}
        <span onClick={() => removeFromCart(item.id)}>
          <RiDeleteBin2Fill />
        </span>
      </div>
    </div>
  )
}
export default SingleCartItem
