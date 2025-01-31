import { Link } from 'react-router'
import '../styles/aboutHome.scss'
const AboutHome = () => {
  return (
    <section className="about-home">
      <div className="about-content">
        <h2 className="about-title">Our Story: Crafting Digital Excellence</h2>
        <p className="about-description">
          Founded in 2015, TechNest has been at the forefront of innovative
          e-commerce solutions, blending cutting-edge technology with
          user-centric design. We believe in creating seamless digital
          experiences that empower both businesses and consumers.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🚀</div>
            <h3>10M+ Products</h3>
            <p>Curated collection from trusted global brands</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">🌍</div>
            <h3>150 Countries</h3>
            <p>Serving customers worldwide with fast delivery</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">💎</div>
            <h3>Premium Quality</h3>
            <p>Rigorous quality control and 24/7 support</p>
          </div>
        </div>
        <Link className="cta-button" to="/about">
          Explore Our Journey
        </Link>
      </div>
    </section>
  )
}

export default AboutHome
