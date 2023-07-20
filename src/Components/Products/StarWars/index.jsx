import { useEffect, useState } from 'react';
import styles from '../Styles/styles.module.css';

export default function StarWars() {

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
        {dados.StarWars.map((productsSW) => (
          <li key={productsSW.id}>
            <img className={styles.image} src={productsSW.photo} alt={productsSW.title} />
            <span className={styles.containerInfo}>
              <h1 className={styles.titleProduct}>{productsSW.title}</h1>
              <h3 className={styles.price}>{productsSW.price}</h3>
              <a href="#" className={styles.seeProduct} target="_blank" rel='noreferrer'>Ver produto</a>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}