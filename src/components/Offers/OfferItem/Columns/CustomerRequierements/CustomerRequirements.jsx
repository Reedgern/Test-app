import React from "react";
import styles from './CustomerRequirements.module.css';

const formatString = (numDocs) => {
    switch (numDocs % 10) {
        case 1:
            return 'документ';
        case 2:
        case 3:
        case 4:
            return 'документа';
        default:
            return 'документов';
    }
};

const CustomerRequirements = ({customerRequirements}) => {
    return (
        <div className={styles.requirements}>
            <div>
                Возраст от {customerRequirements.age} {customerRequirements.age % 10 === 1 ? 'года' : 'лет'}
            </div>
            <div>
                Стаж от {customerRequirements.lastExperience} месяцев
            </div>
            <div>
                {`${customerRequirements.documents} ${formatString(customerRequirements.documents)}`}
            </div>
        </div>
    );
};

export default CustomerRequirements;