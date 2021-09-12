import offersData from '../data/data';

const offersDataExt = offersData.map((data, idx) => ({...data, id: idx})); // as we won't change this object shallow copy would be enough

const compareByRate = (a, b) => {
    return a.rate.periods[0].rate.from.toFixed(2) - b.rate.periods[0].rate.from.toFixed(2);
};

const compareByAmount = (a, b) => {
    return a.rate.creditAmount.from - b.rate.creditAmount.from;
};

export const offersAPI = {
    // common function for getting and adding new offers.
    // As a server usually has a lot of data, it doesn't send it all at one request,
    //  instead it gives it by small portions.
    // By this reason we can't just sort the data we've already received as new portions will be unsorted.
    // To address this problem we will sort the whole data we have (in our case it won't take much time)
    // before giving it back by portions.
    getOffers: (currentIdx=0, count=10, sortType=null) => {
        const offersList = offersDataExt.slice();
        switch (sortType) {
            case 'rate': {
                offersList.sort(compareByRate);
                break;
            }
            case  'amount': {
                offersList.sort(compareByAmount);
                break
            }
        }

        return new Promise((resolve, reject) => {
            const response = {
                data: {
                    offersList: offersList.slice(currentIdx, currentIdx + count),
                    unshownLeft: Math.max((offersList.length - currentIdx - count), 0),
                },
                resultCode: 0
            };

            setTimeout(() => resolve(response), (Math.random()) * 1000);
        });
    },
    getOffer: (offerId) => {
        return new Promise((resolve, reject) => {
            const response = {
                data: {
                    offerInfo: offersDataExt.find(data => data.id == offerId) // we compare this way because offerId is a string received as url params
                },
                resultCode: 0
            };

            setTimeout(() => resolve(response), (Math.random()) * 1000);
        })
    }
};