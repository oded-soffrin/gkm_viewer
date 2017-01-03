import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import Admin from './components/Admin';
import App from './components/App';
import AdminHomePage from './components/AdminHomePage';
import GKMHomePage from './components/GKMHomePage';
import NextListingsPage from './components/GKM/NextListingsPage';
import IgPage from './containers/InstagramPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import ProductsContainer from "./containers/ProductsContainer.js"


// <Route path="/" component={Admin}>
export default (
    <Route path="/admin" component={App}>
            <IndexRoute component={AdminHomePage}/>
            <Route path="gkm" component={GKMHomePage}/>
            <Route path="products-container" component={ProductsContainer}/>
            <Route path="next-listings" component={NextListingsPage}/>
            <Route path="ig" component={IgPage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="*" component={NotFoundPage}/>
    </Route>
);
