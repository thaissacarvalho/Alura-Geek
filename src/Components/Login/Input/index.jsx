import styles from './styles.module.css';

export default function Input({type, placeholder}) {
  return (
      <input className={styles.input} type={type} placeholder={placeholder}/>
  )
}
