import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
  return (
    <div className={styles.partners}>
      <h1>Наши партнеры</h1>
      <div className={styles.item}>
        <h1>Партнер 1</h1>
        <a href="#">Магазин</a>
      </div>
      <div className={styles.item}>
        <h1>Партнер 2</h1>
        <a href="#">Магазин</a>
      </div>
      <div className={styles.item}>
        <h1>Партнер 3</h1>
        <a href="#">Магазин</a>
      </div>
      <div className={styles.item}>
        <h1>Партнер 4</h1>
        <a href="#">Магазин</a>
      </div>
      <div className={styles.item}>
        <h1>Партнер 5</h1>
        <a href="#">Магазин</a>
      </div>
      <div className={styles.item}>
        <h1>Партнер 6</h1>
        <a href="#">Магазин</a>
      </div>
    </div>
  );
};

export default Partners;
