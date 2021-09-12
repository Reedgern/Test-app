import React from "react";
import styles from './Rate.module.css';

const Rate = ({name, rate}) => {
    return (
        <div className={styles.rateContainer}>
            <div className={styles.rateRow}>
                <span>{(Math.abs(rate.to - rate.from) > 1e-4 ? "От ": "")}</span>
                <span className={styles.rateNum}>{`${rate.from}%`}</span>
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    );
};

export default Rate;