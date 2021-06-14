<template>
  <app-navigator :key="darkMode"></app-navigator>
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
import store from '../assets/js/store/';
import styles from '../assets/js/styles.js'

const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    Today: {
      screen:TodaysBetsScreen,
      navigationOptions: ({ navigation }) => ({
        title:"24H",
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="clock" color={navigation.isFocused() ? '#3788fa' : styles('bottomNavBarIcon').color}size={24} solid/>
        },
        unmountOnBlur: true,
      })
    },
    Pronos: {
      screen:HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title:"Pronos",
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="basketball-ball" color={navigation.isFocused() ? '#3788fa' : styles('bottomNavBarIcon').color}size={24} solid/>
        },
        unmountOnBlur: true,
      })
    },
    Bilan: {
      screen: BilanScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="chart-line" color={navigation.isFocused() ? '#3788fa' : styles('bottomNavBarIcon').color}size={24} solid/>
        },
        unmountOnBlur: true,
      })
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: (focused) => {
          return <FontAwesome5 name="at" color={navigation.isFocused() ? '#3788fa' : styles('bottomNavBarIcon').color}size={24} solid/>
        },
        unmountOnBlur: true,
      })
    },
  },
  {
    lazy:true,
    tabBarPosition: "bottom",
    initialRouteName:'Pronos',
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: '#3788fa',
      style: styles('bottomNavBar'),
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
      pressColor: 'gray',
    },
  }
);

const AppNavigator = createAppContainer(BottomTabNavigator);

export default {
  props: {
    navigation: { type: Object }
  },

  components: { AppNavigator },

  computed:{
    darkMode(){
      return this.$store.state.darkMode;
    },
  },
}
</script>