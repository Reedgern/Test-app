import React from "react";
import styles from './Logo.module.css';

const Logo = ({orgName, logo}) => {
    return (
        <div className={styles.logo}>
            <img title={orgName} src={logo} alt={orgName}/>
        </div>
    )
};

export default Logo;