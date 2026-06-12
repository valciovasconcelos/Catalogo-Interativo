'use client';

import { useState } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <button 
      className={`${styles.button} ${liked ? styles.liked : ''}`} 
      onClick={toggleLike}
      aria-label="Curtir"
    >
      <span className={styles.icon}>{liked ? '❤️' : '🤍'}</span>
      <span className={styles.count}>{count > 0 ? count : ''}</span>
    </button>
  );
}
