import styles from '../styles/modules/loader.module.scss'
const Loader = () => {
  return (
    <div className={styles.outer_loader}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader
