import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function buttonLogin({name, page}) {
  return (
    <Link className={styles.button} to={page}>{name}</Link>
  )
}
