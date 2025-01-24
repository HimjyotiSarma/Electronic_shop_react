interface Product {
  id: number
  title: string
  image: string
  price: number
  description: string
  brand: string
  model: string
  color: string
  category: string
  discount?: number
  popular?: boolean
}
type CartItem = Product & {
  quantity: number
}
export { type Product, type CartItem }
