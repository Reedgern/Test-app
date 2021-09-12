import {offersAPI} from "../api/api";

const SET_OFFER_INFO = 'offerInfoPage-SetOfferInfo';
const SET_LOADING = 'offerInfoPage-SetLoading';

const initialState = {
    offerInfo: null,
    isLoading: false
};

export const offerInfoReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_OFFER_INFO: {
            return {
                ...state,
                offerInfo: action.offerInfo,
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        default: {
            return state
        }
    }
};

const setOfferInfo = (offerInfo) => ({
    type: SET_OFFER_INFO,
    offerInfo
});

const setLoading = (isLoading) => ({
    type: SET_LOADING,
    isLoading,
});

export const getOfferInfo = (offerId) => (dispatch) => {
    dispatch(setLoading(true));
    offersAPI.getOffer(offerId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setOfferInfo(response.data.offerInfo));
            }
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
};