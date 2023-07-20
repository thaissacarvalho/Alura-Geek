import styles from '../Input/styles.module.css';

export default function TextArea() {
    return (
        <div className={styles.formGroup}>
            <textarea required className={styles.formControl} id="inputField" placeholder=" " />
            <label htmlFor="inputField" className={styles.formControlLabel}>Descrição do Produto</label>
        </div>
    )
}
