import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles['footer-container']}>
      <p>This is the footer</p>
    </div>
  )
}

export { Footer }