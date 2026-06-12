'use client';

import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <div className={styles.searchBox}>
      <input 
        type="text" 
        placeholder="Pesquisar produtos..." 
        className={styles.input}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
