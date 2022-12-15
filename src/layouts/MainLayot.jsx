import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}></Header>
      <Outlet className={styles.content}></Outlet>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};

export default MainLayout;
