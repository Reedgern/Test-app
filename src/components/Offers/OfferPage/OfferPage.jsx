import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getOfferInfo} from "../../../redux/offerInfoReducer";
import Preloader from "../../common/Preloader/Preloader";
import styles from './OfferPage.module.css';
import RequirementsTable from "./RequirementsTable/RequirementsTable";
import RatesTable from "./RatesTable/RatesTable";
import classNames from "classnames";

const OfferPage = (props) => {
        const [currentItem, setCurrentItem] = useState(null);

        const onSwitch = (newItem) => {
            setCurrentItem(newItem);
        };

        const getCurrentItem = () => {
            switch (currentItem) {
                case 'requirements': {
                    const age = props.offerInfo.customerRequirements.age;
                    const ageAtRepayment = {
                        manAgeAtRepayment: props.offerInfo.customerRequirements.manAgeAtRepayment,
                        femaleAgeAtRepayment: props.offerInfo.customerRequirements.femaleAgeAtRepayment
                    };
                    const lastExperience = props.offerInfo.customerRequirements.lastExperience;
                    const fullExperience = props.offerInfo.customerRequirements.fullExperience;
                    const salary = {
                            salary: props.offerInfo.customerRequirements.salary,
                            currency: props.offerInfo.rate.currency,
                        };

                    return <RequirementsTable {...{age, ageAtRepayment, lastExperience, fullExperience, salary}}/>
                }
                case
                'rates'
                : {
                    const credit = {
                        creditAmount: props.offerInfo.rate.creditAmount,
                        currency: props.offerInfo.rate.currency,
                    };
                    const rate = props.offerInfo.rate.periods[0].rate;
                    const initialAmount = props.offerInfo.rate.initialAmount;
                    const term = props.offerInfo.rate.periods[0].term;

                    return <RatesTable {...{credit, rate, initialAmount, term}} />;
                }
                default: {
                    return null;
                }
            }
        };

        useEffect(() => {
            props.getOfferInfo(props.match.params.offerId);
        }, []);

        if (!props.offerInfo || props.isLoading) {
            return <Preloader/>
        }

        return (
            <div style={{'background-color': 'white'}}>
                <h1 style={{'text-align': 'center'}} >Ипотека "{props.offerInfo.name}" от "{props.offerInfo.organization.name}"</h1>
                <div className={styles.orgContainer}>
                    <img src={props.offerInfo.organization.logo}/>
                    <span className={styles.license}>Лиц. №{props.offerInfo.organization.license}</span>
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.menuItem}>
                        <span className={classNames({
                            [styles.active]: currentItem === 'rates',
                            [styles.menuItem_hover]: currentItem !== 'rates',
                        })}
                              onClick={() => onSwitch('rates')}>Ставка</span>
                    </div>
                    <div className={styles.menuItem}>
                        <span className={classNames({
                            [styles.active]: currentItem === 'requirements',
                            [styles.menuItem_hover]: currentItem !== 'requirements',
                        })}
                              onClick={() => onSwitch('requirements')}>Требования</span>
                    </div>
                </div>
                <div style={{'padding': '30px 30px 0 30px'}}>
                {getCurrentItem()}
                </div>
            </div>
        );
    }
;

const mapStateToProps = (state) => ({
    offerInfo: state.offerInfoPage.offerInfo,
    isLoading: state.offerInfoPage.isLoading,
});

const mapDispatchToProps = ({
    getOfferInfo
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(OfferPage);