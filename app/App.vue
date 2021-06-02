<template>
  <app-navigator></app-navigator>
  
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
} from "vue-native-router";

import HomeScreen from "./screens/HomeScreen.vue";
import TodaysBetsScreen from "./screens/TodaysBetsScreen.vue";
import BilanScreen from "./screens/BilanScreen.vue";
import ContactScreen from "./screens/ContactScreen.vue";
import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Today: {
      screen:TodaysBetsScreen,
      navigationOptions: ({ navigation }) => ({
        title:"24H",
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="clock" color={navigation.isFocused() ? '#3788fa' : 'gray'}size={24} solid/>
        },
      })
    },
    Pronos: {
      screen:HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title:"Pronos",
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="basketball-ball" color={navigation.isFocused() ? '#3788fa' : 'gray'}size={24} solid/>
        },
      })
    },
    Bilan: {
      screen: BilanScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="chart-line" color={navigation.isFocused() ? '#3788fa' : 'gray'}size={24} solid/>
        },
      })
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="at" color={navigation.isFocused() ? '#3788fa' : 'gray'}size={24} solid/>
        },
      })
    },
  },
  {
    initialRouteName:'Pronos',
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: '#3788fa',
    },
  }
);

const AppNavigator = createAppContainer(BottomTabNavigator);

export default {
  components: { AppNavigator },
}
</script>