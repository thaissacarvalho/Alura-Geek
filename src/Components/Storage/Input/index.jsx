import styles from './styles.module.css';

export default function Input({ type, nameLabel }) {
    return (
        <div className={styles.formGroup}>
            <input required type={type} className={styles.formControl} id="inputField" placeholder=" "/>
            <label htmlFor="inputField" className={styles.formControlLabel}>{nameLabel}</label>
        </div>
    )
}
