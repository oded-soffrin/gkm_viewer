import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import etsy from './etsyReducer';
import ig from './igReducer';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  etsy,
  ig,
  routing: routerReducer
});

export default rootReducer;
