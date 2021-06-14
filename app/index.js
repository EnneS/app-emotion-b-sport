/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Icon } from 'react-native-elements'
import Vue from "vue-native-core";
import store from './assets/js/store/'
import styles from './assets/js/styles.js'
import imgs from './assets/img/index.js';

Vue.prototype.$styles = styles.getStyles("dark");
Vue.prototype.$imgs = imgs;
Vue.prototype.$store = store;

console.disableYellowBox = true;

Vue.component("ionicons", Icon);
AppRegistry.registerComponent(appName, () => App);
