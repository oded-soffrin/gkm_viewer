import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Admin from './components/Admin';
import App from './components/App';
import AdminHomePage from './components/AdminHomePage';
import HomePage from './components/HomePage';
import EtsyHomePage from './components/Etsy/EtsyHomePage';
import EtsyWrapper from './containers/EtsyWrapper';
import GKMHomePage from './components/GKMHomePage';
import IgPage from './containers/InstagramPage'; // eslint-disable-line import/no-named-as-default
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import ShopPage from "./components/Shop/ShopPage.js";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EtsyWrapper(HomePage)}/>
        <Route path="about" component={AboutPage}/>
        <Route path="shop" component={EtsyWrapper(ShopPage)}/>
        <Route path="/admin" component={Admin}>
                <IndexRoute component={AdminHomePage}/>
                <Route path="gkm" component={GKMHomePage}/>
                <Route path="etsy" component={EtsyWrapper(EtsyHomePage)}/>
                <Route path="ig" component={IgPage}/>
                <Route path="fuel-savings" component={FuelSavingsPage}/>
                <Route path="about" component={AboutPage}/>
                <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);
