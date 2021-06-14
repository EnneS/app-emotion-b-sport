<template>
  <view :style="styles('page')">
    <text class="heading">Contact</text>
  </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object }
  },
  computed:{
    user(){
      return this.$store.state.user;
    },
    styles() {
      return this.$styles;
    },
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
  color: blue;
  margin: 20px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>