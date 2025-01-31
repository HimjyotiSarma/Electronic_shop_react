// interface Product {
//   id: number
//   title: string
//   image: string
//   price: number
//   description: string
//   brand: string
//   model: string
//   color: string
//   category: string
//   discount?: number
//   popular?: boolean
// }
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}
interface CartItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  quantity: number
}

interface Rating {
  rate: number
  count: number
}

interface SingleCartItemType {
  item: CartItem
}
export { type Product, type CartItem, type SingleCartItemType }
