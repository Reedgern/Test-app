import React, {useEffect} from 'react';
import OfferItem from "./OfferItem/OfferItem";
import {getOffers} from "../../redux/offersReducer";
import {connect} from "react-redux";
import styles from './Offers.module.css';
import plusIcon from '../../assets/images/Green_plus_mark.svg';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import classNames from "classnames";

const ShowMoreButton = ({getOffers, unshownLeft, count = 15, sortType = null}) => {
    if (unshownLeft === 0) {
        return null;
    }

    const leftCount = Math.min(count, unshownLeft);

    return (
        <div className={styles.showMore} onClick={() => getOffers({count, sortType})}>
            Показать еще {`${leftCount}`} из {`${unshownLeft}`}
            <img src={plusIcon}/>
        </div>
    )
};

const Offers = (props) => {
    useEffect(() => {
        if (props.offers.length === 0) {
            props.getOffers({});
        }
    }, []);

    if (props.offers.length === 0) {
        return <Preloader/>;
    }

    return (
        <>
            <div className={styles.offersContainer}>
                <div className={styles.sortContainer}>
                    Сортировать:
                    <span className={classNames({
                        [styles.sort]: props.sortType !== 'rate',
                        [styles.showMore_active]: props.sortType === 'rate',
                    })} onClick={() => {
                        if (props.sortType !== 'rate') {
                            props.getOffers({sortType: 'rate'})
                        }
                    }
                    }>по ставке</span>
                    <span className={classNames({
                        [styles.sort]: props.sortType !== 'amount',
                        [styles.showMore_active]: props.sortType === 'amount',
                    })} onClick={() => {
                        if (props.sortType !== 'amount') {
                            props.getOffers({sortType: 'amount'})
                        }
                    }
                    }>по сумме</span>
                </div>
                {props.offers.map(offerData => {
                    return <OfferItem key={offerData.id} offerData={offerData}/>
                })}
                {props.isLoading ?
                    <Preloader/> :
                    <div>
                        <ShowMoreButton getOffers={props.getOffers}
                                        unshownLeft={props.unshownLeft} sortType={props.sortType}/>
                    </div>
                }
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    offers: state.offersPage.offers,
    unshownLeft: state.offersPage.unshownLeft,
    isLoading: state.offersPage.isLoading,
    sortType: state.offersPage.sortType,
});

const mapDispatchToProps = {
    getOffers,
};


export default compose(
    // withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Offers);