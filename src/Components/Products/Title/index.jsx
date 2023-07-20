import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function Title({ name }) {
    return (
        <>
            <div className={styles.containerTitle}>
                <h1 className={styles.titleProduct}>{name}</h1>
                <Link to="/products" className={styles.seeProducts}>Ver tudo →</Link>
            </div>
        </>
    );
}