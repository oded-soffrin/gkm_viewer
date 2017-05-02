import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Admin from './components/Admin';
import AdminHomePage from './components/AdminHomePage';
import GKMHomePageContainer from './containers/GKM/GKMHomePageContainer';
import NextListingsPageContainer from './containers/GKM/NextListingPageContainer';
import IgPage from './containers/InstagramPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import ProductsContainer from "./containers/ProductsContainer.js"
import EtsyProductItemsContainer from "./containers/EtsyProductItemsContainer.js"
import ItemsContainer from "./containers/GKM/ItemsContainer.js"
import SongApp from './components/HearAsong/SongApp.js'

export default (
    <Route path="/admin" component={Admin}>
            <IndexRoute component={AdminHomePage}/>
            <Route path="gkm" component={GKMHomePageContainer}/>
            <Route path="products-container" component={ProductsContainer}/>
            <Route path="etsy-product-items" component={EtsyProductItemsContainer}/>
            <Route path="next-listings" component={NextListingsPageContainer}/>
            <Route path="ig" component={IgPage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="items" component={ItemsContainer}/>
            <Route path="song" component={SongApp}/>
            <Route path="*" component={NotFoundPage}/>
    </Route>
);

