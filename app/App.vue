<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import LoginScreen from "./screens/LoginScreen.vue";
import LoggedScreen from "./screens/LoggedScreen.vue";
import SettingsScreen from "./screens/SettingsScreen.vue";
import {Button, Image} from 'react-native';
import store from './assets/js/store/';
import styles from './assets/js/styles.js'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as React from 'react';

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 50, marginBottom: 5, resizeMode: "stretch" }}
      source={ store.state.darkMode ? imgs.logoHorizontalDark : imgs.logoHorizontalLight }
    />
  );
}

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown : false,
      })
    },
    Logged: {
      screen: LoggedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: props => <LogoTitle/>,
        headerRight: () => (
          <FontAwesome5 name="cog" color={styles('topNavBarIcon').color} size={24} solid onPress={() => navigation.navigate("Settings") } style={{marginHorizontal:10}}/>
        ),
        headerStyle: styles('topNavBar'),
        headerTintColor: 'white',
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    }
  },
  {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>