import banner from '../../../assets/images/home/banner-image.png';
import styles from './styles.module.css';

export default function Banner() {
    return (
        <>
            <section className={styles.container}>
                <img className={styles.banner} src={banner} alt="Cogumelo do Mario Bross"/>
                <span className={styles.textos}>
                    <h1 className={styles.titulo}>Julho Promocional</h1>
                    <h4 className={styles.subtitulo}>Produtos selecionados com 33% de desconto</h4>
                    <a className={styles.Link} href="#" target="_blank" rel="noopener noreferrer">Ver consoles</a>
                </span>
            </section>
        </>
    )
}
