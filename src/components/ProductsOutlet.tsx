import { Outlet } from 'react-router'
import Filters from '../components/Filters'
import '../styles/productPage.scss'

const ProductsOutlet = () => {
  return (
    <div className="product_page">
      <Filters />
      <Outlet />
    </div>
  )
}
export default ProductsOutlet
