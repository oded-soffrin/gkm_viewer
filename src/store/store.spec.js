import MockDate from 'mockdate';
import { expect } from 'chai';
//import { createStore } from 'redux';

//import dateHelper from '../utils/dateHelper';
//import initialState from '../reducers/initialState';
//import rootReducer from '../reducers';

describe('Store', () => {
  //let dateModified;
  before(() => {
    MockDate.set(new Date());
    //dateModified = dateHelper.getFormattedDateTime();
  });
  after(() => MockDate.reset());

  it('dummy test', () => {
    //const store = createStore(rootReducer, initialState);

    expect(true).to.equal(true);
  });

});
