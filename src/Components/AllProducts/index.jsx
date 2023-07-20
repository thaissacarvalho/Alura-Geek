import styles from './styles.module.css';
import StarWars from '../Products/StarWars';
import Consoles from '../Products/Consoles';
import Diversos from '../Products/Diversos';
import Title from './Title'

export default function AllProducts() {
  return (
    <section className={styles.sectionAllProducts}>
        <Title/>
        <StarWars/>
        <Consoles/>
        <Diversos/>
    </section>
  )
}
