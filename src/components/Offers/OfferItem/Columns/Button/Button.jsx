import React from "react";
import styles from './Button.module.css';
import {NavLink} from "react-router-dom";

const Button = ({id, license}) => {
    return (
        <div className={styles.buttonContainer}>
            <div className={styles.license}>Лиц. №{license}</div>
            <div>
                <NavLink to={`/offers/${id}`}><button className={styles.button}>Перейти на сайт</button></NavLink>
            </div>
        </div>
    )
}

export default Button