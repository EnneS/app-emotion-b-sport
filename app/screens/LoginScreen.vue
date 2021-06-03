<template>
  <view class="container">
    <text class="heading">Login</text>
    <text class="text">This is the Login screen</text>
    <button title="Login" @press="login"></button>
  </view>
</template>

<script>
import { StackActions, NavigationActions } from 'react-navigation';

export default {
  props: {
    navigation: { type: Object }
  },
  methods:{
    async login(){
      const navigateAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Logged" })],
      });

      this.navigation.dispatch(navigateAction);
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 50px;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: turquoise;
  margin: 20px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>