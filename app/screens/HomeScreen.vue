<template>
  <view class="container">
    <text class="heading">Home</text>
    <text class="text">This is the Home screen</text>
  </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object }
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
  color: green;
  margin: 20px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>