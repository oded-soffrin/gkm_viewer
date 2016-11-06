import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import GKMHomePage from './components/GKMHomePage';
import IgPage from './containers/InstagramPage'; // eslint-disable-line import/no-named-as-default
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import EtsyPage from "./containers/EtsyPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="gkm" component={GKMHomePage}/>
        <Route path="etsy" component={EtsyPage}/>
        <Route path="ig" component={IgPage}/>
        <Route path="fuel-savings" component={FuelSavingsPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
