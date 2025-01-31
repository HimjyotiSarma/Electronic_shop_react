import '../styles/aboutPage.scss'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About TechNest</h1>
          <p className="hero-tagline">
            Where Innovation Meets Digital Commerce
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At TechNest, we're revolutionizing the e-commerce experience by
              bridging the gap between cutting-edge technology and everyday
              consumer needs. Founded in 2015, we've grown from a small startup
              to a global platform serving millions of customers worldwide.
            </p>
          </div>
          <div className="mission-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>Constantly pushing boundaries in digital commerce solutions</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Integrity</h3>
            <p>Transparent and ethical business practices always</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Customer First</h3>
            <p>Your satisfaction drives everything we do</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Alex Johnson</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Maria Chen</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Samir Patel</h3>
            <p>Chief Operations Officer</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Join Our Digital Revolution</h2>
        <p>Discover how we're shaping the future of e-commerce</p>
        <button className="cta-button">Explore Careers</button>
      </section>
    </div>
  )
}

export default About
