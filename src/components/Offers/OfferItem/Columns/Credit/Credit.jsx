import React from "react";
import styles from './Credit.module.css';
import {currencies} from "../../../../../data/currencies";

const CreditAmount = ({creditAmount, currency}) => {
    const currencyChar = currencies[currency];

    return (
        <>
            {!creditAmount.to ? `${creditAmount.from} ${currencyChar}` : `${creditAmount.from} ${currencyChar} - ${creditAmount.to} ${currencyChar}`}
        </>
    );
};

const Term = ({term}) => {
    return (
        <>
            {Math.abs(term.to - term.from) > 1e-4 ? `На срок до ${Math.ceil(term.to / 12)} лет` : `На срок ${Math.ceil(term.from / 12)} лет`}
        </>
    );
};

const Credit = ({currency, creditAmount, term}) => {
    return (
        <div className={styles.credit}>
            <div className={styles.creditAmount}>
                <CreditAmount currency={currency} creditAmount={creditAmount}/>
            </div>
            <div>
                <Term term={term} />
            </div>
        </div>
    )
}

export default Credit;