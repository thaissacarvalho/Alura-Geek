import Title from "./Title";
import Input from './Input';
import Textarea from './Textarea';
import styles from './styles.module.css';

export default function StoragePage() {
  return (
    <section className={styles.container}>
      <form action="" className={styles.form}>
        <Title />
        <Input type='file' nameLabel='Insira a imagem'/>
        <Input type='text' nameLabel='Categoria' />
        <Input type='text' nameLabel='Nome do produto' />
        <Input type='number' nameLabel='Valor do produto' />
        <Textarea />
        <button className={styles.buttonAdd}>Adicionar produto</button>
      </form>
    </section>
  )
}
