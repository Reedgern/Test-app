import React from 'react';
import style from './OfferItem.module.css';
import Logo from "./Columns/Logo/Logo";
import Rate from "./Columns/Rate/Rate";
import CustomerRequirements from "./Columns/CustomerRequierements/CustomerRequirements";
import Credit from "./Columns/Credit/Credit";
import Button from "./Columns/Button/Button";
import {useHistory} from 'react-router-dom';

const OfferItem = ({offerData}) => {
    const history = useHistory();

    const logo = offerData.organization.logo;
    const orgName = offerData.organization.name;
    const rate = offerData.rate.periods[0].rate;
    const term = offerData.rate.periods[0].term;
    const creditAmount = offerData.rate.creditAmount;
    const currency = offerData.rate.currency;

    const onTouch = () => {
        history.push(`/offers/${offerData.id}`);
    };

    return (
        <div onTouchStart={() => onTouch()} className={style.item}>
            <Logo logo={logo} orgName={orgName}/>
            <Rate name={offerData.name} rate={rate}/>
                <Credit currency={currency} term={term} creditAmount={creditAmount} />
            <CustomerRequirements customerRequirements={offerData.customerRequirements}/>
            <Button id={offerData.id} license={offerData.organization.license}/>
        </div>
    );
};

export default OfferItem;