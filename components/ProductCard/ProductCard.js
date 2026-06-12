import Link from 'next/link';
import LikeButton from '../LikeButton/LikeButton';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link href={`/produto/${product.id}`} className={styles.imageLink}>
        <div className={styles.imagePlaceholder}>
          <span>{product.name.charAt(0)}</span>
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.category}>{product.category}</div>
        <Link href={`/produto/${product.id}`}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>
        <p className={styles.price}>
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
        </p>
        <div className={styles.footer}>
          <LikeButton />
          <Link href={`/produto/${product.id}`} className={styles.detailsBtn}>
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
