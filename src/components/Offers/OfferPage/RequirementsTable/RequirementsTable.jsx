import React from "react";
import styles from './Requirements.module.css';
import {currencies} from "../../../../data/currencies";

const formatString = (age) => {
    return age % 10 === 1 ? 'года' : 'лет';
};

const RequirementsTable = ({age, ageAtRepayment, lastExperience, fullExperience, salary}) => {
    ageAtRepayment = Math.max(ageAtRepayment.manAgeAtRepayment, ageAtRepayment.femaleAgeAtRepayment);

    const currency = currencies[salary.currency];
    salary = salary.salary;

    return (
        <div>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <th>Возраст при получении</th>
                    <td>{`От ${age} ${formatString(age)}`}</td>
                </tr>
                <tr>
                    <th>Возраст при погашении</th>
                    <td>{`До ${ageAtRepayment} ${formatString(ageAtRepayment)}`}</td>
                </tr>
                <tr>
                    <th>Стаж на последнем месте работы</th>
                    <td>От {lastExperience} месяцев</td>
                </tr>
                <tr>
                    <th>Общий стаж работы</th>
                    <td>От {fullExperience} месяцев</td>
                </tr>
                <tr>
                    <th>Доход</th>
                    <td> {salary === 0 ? 'Любой' : `От ${salary} ${currency}`}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RequirementsTable;