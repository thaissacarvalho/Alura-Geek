import Products from "../Products";
import Banner from "./Banner";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
        <Banner/>
        <Products/>
    </main>
  )
}
