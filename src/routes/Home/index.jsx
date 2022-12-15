import React from 'react';
import { Input } from 'antd';
import styles from './Home.module.css';
import { FilterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Home = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className={styles.home}>
      <h2>Добро пожаловать</h2>
      <div className={styles.search}>
        <Search placeholder="Поиск" onSearch={onSearch} enterButton />
        <FilterOutlined />
      </div>
      <div className={styles.location}>
        <div className={styles.name}>
          <h2>Популярная локация</h2>
          <h6>Описание</h6>
        </div>
        <a href="#" className={styles.button}>
          иду
        </a>
      </div>
      <div className={styles.actions}>
        <div className={styles.head}>
          <h2>Маршрут</h2>
          <Link to="/map">Смотреть все</Link>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <h3>Локация 1</h3>
            <h6>Описание</h6>
          </div>
          <div className={styles.item}>
            <h3>Локация 2</h3>
            <h6>Описание</h6>
          </div>
          <div className={styles.item}>
            <h3>Локация 3</h3>
            <h6>Описание</h6>
          </div>
          <div className={styles.item}>
            <h3>Локация 4</h3>
            <h6>Описание</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
