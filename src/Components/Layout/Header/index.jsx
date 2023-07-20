import styles from './styles.module.css';
import Logo from '../Logo/index.jsx';
import InputSearch from './InputSearch/index.jsx';
import ButtonLogin from './Button/index.jsx';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header({ page }) {
    const handleSearch = (searchTerm) => {
        console.log('Pesquisando por:', searchTerm);
    };

    const containerSearchStyle = page === "/" || page === "/add-products" ? styles.containerSearch : styles.containerSearchLogin;

    return (
        <header className={styles.header}>
            <Logo />
            <div className={containerSearchStyle}>
                <InputSearch onSearch={handleSearch} />
                <AiOutlineSearch className={styles.iconSearch}/>
            </div>
            {page === "/" && <ButtonLogin page="/login" name="Login" />}
            {page === "/add-products" && <ButtonLogin page="/add-products" name="Menu Administrador" />}
        </header>
    );
}
