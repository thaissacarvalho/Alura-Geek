import styles from './styles.module.css';

export default function Text({ name }) {
  return (
    <a href="#" rel="nonpeferrer" target="_blank" className={styles.textLink}>{name}</a>
  )
}
