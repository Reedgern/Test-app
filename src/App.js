import Offers from "./components/Offers/Offers";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import OfferPage from "./components/Offers/OfferPage/OfferPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './App.module.css';

const App = (props) => {
    return (
            <HashRouter> {/* We used it instead of BrowserRouter since there are some troubles
                                with BrowserRouter while deploying on github-pages */}
                <Provider store={store}>
                    <div className={styles.appContainer}>
                    <Header/>
                    <main className={styles.mainContent}>
                        <Route exact path={'/'} render={() => <HomePage/>}/>
                        <Route exact path={'/offers'} render={() => <Offers/>}/>
                        <Route path={'/offers/:offerId'} render={() => <OfferPage/>}/>
                    </main>
                    <Footer/>
                    </div>
                </Provider>
            </HashRouter>
    );
};

export default App;
