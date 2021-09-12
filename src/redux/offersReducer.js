import {offersAPI} from "../api/api";

const APPEND_OFFERS = 'offersPage-AppendOffers';
const SET_LOADING = 'offersPage-SetLoading';
const SET_SORT_TYPE = 'offersPage-SetSortType';
const SET_OFFERS = 'offersPage-SetOffers';
// const SORT_BY_RATE = 'offersPage-SortByRate';
// const SORT_BY_AMOUNT = 'offersPage-SortByAmount';

const initialState = {
    offers: [],
    unshownLeft: 0,
    isLoading: false,
    sortType: null
};

const compareByRate = (a, b) => {
    return a.rate.periods[0].rate.from.toFixed(2) - b.rate.periods[0].rate.from.toFixed(2);
};

const compareByAmount = (a, b) => {
    return a.rate.creditAmount.from - b.rate.creditAmount.from;
};

export const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPEND_OFFERS: {
            return {
                ...state,
                offers: [...state.offers, ...action.offers],
                unshownLeft: action.unshownLeft,
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        case SET_SORT_TYPE: {
            return {
                ...state,
                sortType: action.sortType,
            }
        }
        case SET_OFFERS: {
            return {
                ...state,
                offers: action.offers,
            }
        }

        // case SORT_BY_RATE: {
        //     return {
        //         ...state,
        //         offers: [...state.offers.sort(compareByRate)],
        //     }
        // }
        default: {
            return state;
        }
    }
};

// export const sortByRate = () => ({
//     type: SORT_BY_RATE
// });
//
// export const sortByAmount = () => ({
//     type: SORT_BY_AMOUNT
// });

const setLoading = (isLoading) => ({
    type: SET_LOADING,
    isLoading
});

const setOffers = (offers) => ({
    type: SET_OFFERS,
    offers,
});

const setSortType = (sortType) => ({
    type: SET_SORT_TYPE,
    sortType
});

const appendOffers = (offers, unshownLeft) => ({
    type: APPEND_OFFERS,
    offers,
    unshownLeft: unshownLeft
});

export const getOffers = ({count=10, sortType=null}) => (dispatch, getState) => {
    const state = getState().offersPage;
    let currentIdx = state.offers.length;

    if (sortType !== state.sortType) {
        dispatch(setOffers([]));
        dispatch(setSortType(sortType));
        currentIdx = 0;
    }

    dispatch(setLoading(true));

    offersAPI.getOffers(currentIdx, count, sortType)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(appendOffers(response.data.offersList, response.data.unshownLeft));
            }
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
};