import React from "react";
import styles from './RatesTable.module.css';
import {currencies} from "../../../../data/currencies";

const RatesTable = ({credit, initialAmount, rate, term}) => {
    let {creditAmount, currency} = credit;
    currency = currencies[currency];

    return (
        <div>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <th>Сумма</th>
                    <th>Первоначальный взнос</th>
                    <th>От {term.from} до {term.to} месяцев</th>
                </tr>
                <tr>
                    <td>{`${creditAmount.from} ${currency}`} {creditAmount.to ? `- ${creditAmount.to} ${currency}` : ''}</td>
                    <td>От {initialAmount.from}%</td>
                    <td>От {rate.from}%</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RatesTable;