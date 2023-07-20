import { useEffect, useState } from 'react';
import styles from '../Styles/styles.module.css';

export default function Diversos() {

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
        {dados.Diversos.map((diversos) => (
          <li className={styles.containerCard} key={diversos.id}>
            <span className={styles.containerInfo}>
              <img className={styles.image} src={diversos.photo} alt={diversos.title} />
              <p className={styles.titleProduct}>{diversos.title}</p>
              <p className={styles.price}>{diversos.price}</p>
              <a href="#" className={styles.seeProduct} target="_blank" rel='noreferrer'>Ver produto</a>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}