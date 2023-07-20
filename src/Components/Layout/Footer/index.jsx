import Logo from "../Logo/index.jsx"
import Form from "./Form/index.jsx";
import Text from "./Text/index.jsx";
import styles from './styles.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.photoLink}>
            <Logo />
            <span className={styles.links}>
              <Text name="Quem somos nós" />
              <Text name="Política de privacidade" />
              <Text name="Programa fidelidade" />
              <Text name="Nossas lojas" />
              <Text name="Quero ser franqueado" />
              <Text name="Anuncie aqui" />
            </span>
          </div>
          <Form />
        </div>
      </footer>
      <div className={styles.footerEnd}>
        <h1 className={styles.dev}>Desenvolvido por Thaissa Carvalho 2023</h1>
      </div>
    </>

  )
}
