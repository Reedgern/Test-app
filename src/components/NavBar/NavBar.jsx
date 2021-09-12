import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={styles.navBarContainer}>
            <NavLink exact to={'/'} className={styles.navColumn}>Главная страница</NavLink>
            <NavLink to={'/offers'} className={styles.navColumn}>Предложения</NavLink>
        </div>
    );
};

export default NavBar;