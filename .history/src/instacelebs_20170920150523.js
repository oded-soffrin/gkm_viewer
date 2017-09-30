
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { getAllProducts } from './actions'
import { loadItems } from './actions/itemActions'

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store


store.dispatch(getAllProducts())

store.dispatch(loadItems())
render(
    <Provider store={store}>
      <div> Hello</div>
    </Provider>, document.getElementById('app')
);
