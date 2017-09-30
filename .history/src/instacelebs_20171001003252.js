
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import InstaCelebs from './components/InstaCelebs'

import { getStats } from './actions/instaActions'


const store = configureStore();
store.dispatch(getStats())

render(
    <Provider store={store}>
      <InstaCelebs/>
    </Provider>, document.getElementById('app')
);
