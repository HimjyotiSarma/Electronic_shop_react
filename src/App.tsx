import './App.css'
import AboutHome from './components/AboutHome'
import Hero from './components/Hero'
// import Footer from './components/Footer'
// import Header from './components/Header'
import PopularProducts from './components/PopularProducts'

function App() {
  // Fetch All Items and Send the Polular 5 Items to the Popular Item Section
  return (
    <>
      <Hero />
      <PopularProducts />
      <AboutHome />
    </>
  )
}

export default App
