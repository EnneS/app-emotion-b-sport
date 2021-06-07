/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Icon } from 'react-native-elements'
import Vue from "vue-native-core";
import styles from './assets/js/styles.js'
import imgs from './assets/img/index.js';

Vue.prototype.$styles = styles;
Vue.prototype.$imgs = imgs;

console.disableYellowBox = true

Vue.component("ionicons", Icon);
AppRegistry.registerComponent(appName, () => App);
