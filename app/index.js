/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Icon } from 'react-native-elements'
import Vue from "vue-native-core";
Vue.component("ionicons", Icon);
AppRegistry.registerComponent(appName, () => App);
