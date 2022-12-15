import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import {
  ShoppingCartOutlined,
  HomeOutlined,
  CompassOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link to="/">
        <HomeOutlined className={styles.icon} />
      </Link>
      <Link to="/map">
        <CompassOutlined className={styles.icon} />
      </Link>
      <Link to="/shop">
        <ShoppingCartOutlined className={styles.icon} />
      </Link>
      <Link to="/user">
        <UserOutlined className={styles.icon} />
      </Link>
    </nav>
  );
};

export default Footer;
