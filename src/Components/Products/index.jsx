import StarWars from './StarWars';
import Consoles from './Consoles';
import Diversos from './Diversos';
import Title from './Title/index.jsx';
import styles from './styles.module.css';

export default function Products() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionCard}>
        <Title name="Star Wars"/>
        <StarWars />
      </div>
      <div className={styles.sectionCard}>
        <Title name="Consoles"/>
        <Consoles />
      </div>
      <div className={styles.sectionCard}>
        <Title name="Diversos" />
        <Diversos />
      </div>
    </section>
  )
}
