import { useEffect, useState } from 'react';
import styles from '../Styles/styles.module.css';

export default function Products() {

  const [dados, setDados] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/db.json');
      const jsonData = await data.json();
      setDados(jsonData);
    };

    fetchData();
  }, []);

  if (!dados) {
    return <div>Carregando dados...</div>;
  }

  return (
    <section className={styles.sectionProducts}>
    <ul className={styles.Cards}>
        {dados.Consoles.map((consoles) => (
          <li className={styles.containerCard} key={consoles.id}>
            <img className={styles.image} src={consoles.photo} alt={consoles.title} />
            <span className={styles.containerInfo}>
              <h1 className={styles.titleProduct}>{consoles.title}</h1>
              <h3 className={styles.price}>{consoles.price}</h3>
              <a href="#" className={styles.seeProduct} target="_blank" rel='noreferrer'>Ver produto</a>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}