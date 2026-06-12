import { products } from '@/data/products';
import Link from 'next/link';
import LikeButton from '@/components/LikeButton/LikeButton';
import styles from './ProductDetail.module.css';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/produtos" className={styles.backLink}>
        &larr; Voltar para o catálogo
      </Link>
      
      <div className={styles.productFlex}>
        <div className={styles.imagePlaceholder}>
          <span>{product.name.charAt(0)}</span>
        </div>
        
        <div className={styles.info}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>
          
          <div className={styles.description}>
            <h3>Sobre este produto</h3>
            <p>{product.description}</p>
          </div>
          
          <div className={styles.actions}>
            <LikeButton />
            <button className={styles.buyBtn}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </div>
  );
}
