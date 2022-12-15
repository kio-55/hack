import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import notification from './not.svg';

import styles from './Header.module.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.content}>
        <img className={styles.notification} src={notification} alt="" />
        <Avatar size={48} icon={<UserOutlined />} />
      </div>
    </header>
  );
};

export default Header;
