import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.headerContainer}>
            <h1>Ипотечный калькулятор</h1>
            <NavBar/>
        </header>
    );
};

export default Header;