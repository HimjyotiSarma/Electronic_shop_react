import { Link } from 'react-router'
import '../styles/footer.scss'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter, FaSquareInstagram } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer>
      <div className="top_area">
        {/* Help & Information Section */}
        <div className="logo_address_section info_area">
          <h4>HELP & INFORMATION</h4>
          <div className="links_area">
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/cancel">Cancel & Return</Link>
          </div>
        </div>

        {/* About Company Section */}
        <div className="about_company_section info_area">
          <h4>ABOUT OUR COMPANY</h4>
          <p>
            We are dedicated to providing the best products and services to our
            customers. With over 10 years of experience, we strive to meet your
            needs and expectations.
          </p>
        </div>

        {/* Socials & Signup Section */}
        <div className="socials_signup_section info_area">
          <h4>FOLLOW US</h4>
          <div className="social_links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <h4>SIGN UP FOR OUR NEWSLETTER</h4>
          <form className="signup_form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="footer_copyright">
        <p>
          &copy; {new Date().getFullYear()} Ceated by Himjyoti Sarma{' '}
          <a href="https://github.com/HimjyotiSarma">
            <FaGithub />
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
