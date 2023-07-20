import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Title() {
  return (
    <div className={styles.containerTitle}>
        <h1 className={styles.title}>Todos os produtos</h1>
        <Link to='/add-products' className={styles.button}>Adicionar produto</Link>
    </div>
  )
}
