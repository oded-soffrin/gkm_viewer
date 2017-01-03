import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import ProductPageContainer from "./containers/ProductPageContainer.js";
import CollectionContainer from "./containers/CollectionContainer.js"
import ShopPage from "./components/Shop/ShopPage.js";
import ShoppingCartContainer from "./containers/DemoShopingCartContainer"
import CollectionsPage from "./components/Shop/CollectionsPage.js"

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="shop" component={ShopPage}/>
        <Route path="shop/cartExample" component={ShoppingCartContainer} />
        <Route path="shop/:id" component={ProductPageContainer} />

        <Route path="collection" component={CollectionsPage} />
        <Route path="collection/:id" component={CollectionContainer} />
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
