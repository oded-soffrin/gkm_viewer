import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Admin from './components/Admin';
import App from './components/App';
import AdminHomePage from './components/AdminHomePage';
import HomePage from './components/HomePage';
import GKMHomePage from './components/GKMHomePage';
import NextListingsPage from './components/GKM/NextListingsPage';
import IgPage from './containers/InstagramPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import ProductPageContainer from "./containers/ProductPageContainer.js";
import ShopPage from "./components/Shop/ShopPage.js";
import ShoppingCartContainer from "./containers/DemoShopingCartContainer"

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="shop" component={ShopPage}/>
            <Route path="shop/cartExample" component={ShoppingCartContainer} />
            <Route path="shop/:id" component={ProductPageContainer} />

        <Route path="/admin" component={Admin}>
                <IndexRoute component={AdminHomePage}/>
                <Route path="gkm" component={GKMHomePage}/>
                <Route path="next-listings" component={NextListingsPage}/>
                <Route path="ig" component={IgPage}/>
                <Route path="about" component={AboutPage}/>
                <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);
