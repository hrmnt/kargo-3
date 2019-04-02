/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

import { YellowBox } from 'react-native';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';
import rootStore from './stores';

import Apps  from "./router";


enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
});


YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);


export default class App extends Component {
  render() {
    return (
        <Provider {...rootStore}>
          <Apps />
        </Provider>
    );
  }
}

