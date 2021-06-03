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
import { LogoLight } from './assets/img';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as React from 'react';

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 50, resizeMode: "stretch" }}
      source={LogoLight}
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
        headerTitle: props => <LogoTitle{... props}/>,
        headerRight: () => (
          <FontAwesome5 name="cog" color="gray" size={24} solid onPress={() => navigation.navigate("Settings") } style={{marginHorizontal:10}}/>
        ),
        headerLeft: () => null,
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Paramètres",
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