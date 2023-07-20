import styles from './styles.module.css'

export default function Input() {
  return (
    <div className={styles.containerForm}>
      <div className={styles.formGroup}>
        <input type="text" className={styles.formControl} id="inputField" placeholder=" " />
        <label htmlFor="inputField" className={styles.formControlLabel}>Nome</label>
      </div>
      <div className={styles.formGroup}>
        <textarea className={styles.formControl} id="textareaField" placeholder=" "></textarea>
        <label htmlFor="textareaField" className={styles.formControlLabel}>Escreva a sua mensagem</label>
      </div>
    </div>
  )
}