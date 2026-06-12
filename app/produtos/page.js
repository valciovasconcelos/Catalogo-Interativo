'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './Produtos.module.css';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizeString = (str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredProducts = products.filter(product => {
    const term = normalizeString(searchTerm);
    return normalizeString(product.name).includes(term) ||
           normalizeString(product.category).includes(term);
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Nosso Catálogo</h1>
        <p className={styles.subtitle}>Explore nossa seleção de produtos tecnológicos de alta performance.</p>
      </header>

      <SearchBar onSearch={setSearchTerm} />

      <div className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noResults}>Nenhum produto encontrado para sua busca.</p>
        )}
      </div>
    </div>
  );
}
