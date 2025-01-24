import styles from '../styles/modules/error.module.scss'
import error_img from '../assets/error_img.svg'
import { Link } from 'react-router'
const Error = () => {
  return (
    <div className={styles.error_page}>
      <h1>ERROR</h1>
      <img
        className={styles.error_image}
        src={error_img}
        alt="Error Image from Freepik
      "
      />
      <h4>
        The Page you are trying to access doesn't exist or has been moved.
        <br />
        Try going back to out homepage.
      </h4>
      <Link className={styles.error_btn} to="/">
        Go to Homepage
      </Link>
    </div>
  )
}

export default Error
