import React from 'react';

import styles from './Map.module.css';
import map from './map.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <div className={styles.map}>
      <h1>Карта маршрутов</h1>
      <img src={map} alt="" />
      <Button className={styles.button} type="primary" size="large">
        Наши партнеры
      </Button>
      <hr></hr>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <h2>Название</h2>
        <Link to="/">Подробнее</Link>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <h2>Название</h2>
        <Link to="/">Подробнее</Link>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <h2>Название</h2>
        <Link to="/">Подробнее</Link>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <h2>Название</h2>
        <Link to="/">Подробнее</Link>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}></div>
        <h2>Название</h2>
        <Link to="/">Подробнее</Link>
      </div>
    </div>
  );
};

export default Map;
