// import Offers from "./components/Offers/Offers";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
// import OfferPage from "./components/Offers/OfferPage/OfferPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './App.module.css';
import Preloader from "./components/common/Preloader/Preloader";

const Offers = React.lazy(() => import('./components/Offers/Offers'));
const OfferPage = React.lazy(() => import('./components/Offers/OfferPage/OfferPage'));

const App = (props) => {
    return (
            <HashRouter> {/* We used it instead of BrowserRouter since there are some troubles
                                with BrowserRouter while deploying on github-pages */}
                <Provider store={store}>
                    <div className={styles.appContainer}>
                    <Header/>
                    <main className={styles.mainContent}>
                        <Route exact path={'/'} render={() => <HomePage/>}/>
                        <Route exact path={'/offers'} render={() => <React.Suspense fallback={<Preloader/>}> <Offers/> </React.Suspense>}/>
                        <Route path={'/offers/:offerId'} render={() => <React.Suspense fallback={<Preloader/>}> <OfferPage/> </React.Suspense>}/>
                    </main>
                    <Footer/>
                    </div>
                </Provider>
            </HashRouter>
    );
};

export default App;
