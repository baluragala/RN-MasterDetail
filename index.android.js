import React, {Component} from 'react';
import {
  AppRegistry
} from 'react-native';
import MainApp from './src/MainApp';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {usersSagaWatcher} from './src/sagas'
import reducer from './src/reducers';
import {createLogger} from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware,createLogger()));
sagaMiddleware.run(usersSagaWatcher);

export default class MasterDetail extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp/>
      </Provider>)
  }
}

AppRegistry.registerComponent('MasterDetail', () => MasterDetail);
