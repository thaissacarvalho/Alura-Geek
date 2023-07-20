import styles from './styles.module.css';
import Input from './Input/index';

export default function Login() {
  return (
    <form className={styles.container}>
      <h3 className={styles.title}>Iniciar Sessão</h3>
      <Input type='email' placeholder='Escreva seu email'/>
      <Input type='password' placeholder='Escreva sua senha'/>
      <button className={styles.buttonSend}>Entrar</button>
    </form>
  )
}
