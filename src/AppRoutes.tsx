import { Route, Routes } from 'react-router'
import App from './App'
import Root from './components/Root'
import About from './pages/About'
import Cart from './pages/Cart'
import Error from './pages/Error'
import CategoryProducts from './pages/CategoryProducts'
import ProductsOutlet from './components/ProductsOutlet'
import AllProducts from './components/AllProducts'
import SingleProduct from './pages/SingleProduct'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductsOutlet />}>
          <Route index element={<AllProducts />} />
          <Route
            path="category/:category_name"
            element={<CategoryProducts />}
          />
        </Route>
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  )
}
export default AppRoutes
