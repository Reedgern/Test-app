import offersData from '../data/data';

const offersDataExt = offersData.map((data, idx) => ({...data, id: idx})); // as we won't change this object shallow copy would be enough

const compareByRate = (a, b) => {
    return a.rate.periods[0].rate.from.toFixed(2) - b.rate.periods[0].rate.from.toFixed(2);
};

const compareByAmount = (a, b) => {
    return a.rate.creditAmount.from - b.rate.creditAmount.from;
};

export const offersAPI = {
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
                    offerInfo: offersDataExt.find(data => data.id == offerId)
                },
                resultCode: 0
            };

            setTimeout(() => resolve(response), (Math.random()) * 1000);
        })
    }
};