<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from "vue-native-router";

import HomeScreen from "./HomeScreen.vue";
import TodaysBetsScreen from "./TodaysBetsScreen.vue";
import BilanScreen from "./BilanScreen.vue";
import ContactScreen from "./ContactScreen.vue";
import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

let dark = true;

const BottomTabNavigator = createMaterialTopTabNavigator(
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
    tabBarPosition: "bottom",
    initialRouteName:'Pronos',
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: '#3788fa',
      style: {
        backgroundColor: "white"
      },
      tabStyle: {
        height:55,
        minHeight:10,
        maxHeight:55,
      },
      labelStyle:{
        textTransform: 'capitalize',
        fontSize: 10,
        marginTop:0
      },
      iconStyle:{
        marginTop:5
      },
      indicatorStyle:{
        top:0,
        backgroundColor:"#3788fa",
      },
      pressColor:"lightgray"
    },
  }
);

const AppNavigator = createAppContainer(BottomTabNavigator);

export default {
  components: { AppNavigator },
}
</script>