import { NavLink } from 'react-router'
import style from '../styles/modules/header.module.scss'
import { FaCartShopping } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import logoImg from '../assets/images/logo_fashion.png'
import useWindowDimension from '../utils/useWindowDimension'
import { useCartStore } from '../stores/cart/store'

const Header = () => {
  const [showList, setShowList] = useState(false)
  const { width } = useWindowDimension()

  const cart = useCartStore((state) => state.cart)
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    if (width > 768) {
      setShowList(false)
    }
  }, [width])

  const handleOpenPageList = () => {
    setShowList(!showList)
  }
  return (
    <header className={style.header}>
      <img className={style.logo} src={logoImg} />
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : '')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : '')}
          to="/products"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : '')}
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <div className={style.userSection}>
        <NavLink className={style.cartSection} to="/cart">
          <FaCartShopping />
          {totalCartItems > 0 && <span>{totalCartItems}</span>}
        </NavLink>
        <button
          className={style.listBtn}
          aria-label="Toggle menu"
          onClick={handleOpenPageList}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      {showList && (
        <div className={style.mobileMenu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink className={style.cardBtn} to="/cart"></NavLink>
        </div>
      )}
    </header>
  )
}
export default Header
