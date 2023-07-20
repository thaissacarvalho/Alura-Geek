import Input from './Input';
import styles from './styles.module.css';

export default function Form() {
  return (
   <form className={styles.containerForm}>
    <h1 className={styles.textTitle}>Fale conosco</h1>
    <Input/>
    <button className={styles.buttonSubmit} type="submit">Enviar Mensagem</button>
   </form>
  )
}
