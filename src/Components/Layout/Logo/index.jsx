import logoImage from "../../../assets/images/Logo/AluraGeek-Logo.svg";
import styles from "./styles.module.css";

export default function Logo() {
    return (
        <img src={logoImage} alt="Logo da Alura Geek" className={styles.logo}/>
    )
}