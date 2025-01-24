import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

const Root = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default Root
