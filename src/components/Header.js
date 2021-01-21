import React from 'react';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header >
      <img src={logo}  alt="logo" className={styles.logo}/>
    </header>
  );
};

export default Header;