import SingleCartItem from '../components/SingleCartItem'
import { useCartStore } from '../stores/cart/store'
import { CartItem } from '../utils/types'
import { Link } from 'react-router'
import '../styles/cartPage.scss'

const Cart = () => {
  const cart = useCartStore((state) => state.cart)
  const totalLength = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const totalsalesTax = Math.round(0.18 * subtotalPrice * 100) / 100

  if (totalLength == 0) {
    return (
      <div className="cart_page">
        <h1>Your Cart is Empty</h1>
      </div>
    )
  }

  return (
    <div className="cart_page">
      <h1>
        Your Cart [{totalLength} {totalLength > 1 ? 'items' : 'item'}]{' '}
      </h1>
      <div className="cart_items_list">
        <div className="cart_heading">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {cart.map((cartItem: CartItem) => {
          return <SingleCartItem item={cartItem} key={cartItem.id} />
        })}
      </div>
      <section className="subtotal_section">
        <div className="total_price_section">
          <div className="head">Subtotal:</div>
          <div className="subtotal_area">
            ${Math.round(subtotalPrice * 100) / 100}
          </div>
        </div>
        <div className="salesTax">
          <div className="head">GST:</div>
          <div className="sales_price_area">${totalsalesTax}</div>
        </div>
        <div className="grand_total_section">
          <div className="head">Grand Total:</div>
          <div className="grand_total_area">
            ${Math.ceil((subtotalPrice + totalsalesTax) * 100) / 100}
          </div>
        </div>
      </section>
      <section className="checkout_area">
        <Link to="/checkout">Checkout</Link>
      </section>
    </div>
  )
}
export default Cart
