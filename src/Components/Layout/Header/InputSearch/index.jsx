import { useState } from 'react';
import styles from './styles.module.css';
 
export default function InputSearch(...{ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={searchTerm} onChange={handleChange} 
          placeholder="O que está procurando?"/>
    </form>
  );
}