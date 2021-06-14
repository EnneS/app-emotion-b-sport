<template>
  <scroll-view>
    <view :style="styles('prognosis.page')">
        <view v-for="i in 5" :key="i" class="test">
          <CategoryLine></CategoryLine>
          <Prognosis v-for="j in 5" :key="j"></Prognosis>
        </view>  
    </view>
  </scroll-view>
</template>

<script>
import Prognosis from '../components/Prognosis.vue';
import CategoryLine from '../components/CategoryLine.vue';
export default {
  components: {
    CategoryLine,
    Prognosis
  },
  props: {
    navigation: { type: Object }
  },
  data() {
    return {
    }
  },
  computed: {
    styles() {
      return this.$styles;
    }
  }
}
</script>

<style>
.heading {
  font-size: 30px;
  font-weight: bold;
  color: orange;
  margin: 20px;
}
.text {
  text-align: center;
  margin: 10px;
}

.test {
	overflow: visible;
}
</style>