import styles from './Footer.module.scss'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <FaHeart className={styles.icon} />
          Cada segundo com você é um presente que o tempo me dá 💘
        </p>
      </div>
    </footer>
  )
}

export default Footer
