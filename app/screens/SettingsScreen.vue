<template>
    <view :style="styles('page')">
      <view :style="styles('settingsScreen.header')">
        <text :style="styles('settingsScreen.headerText')">Paramètres</text>
        <FontAwesome5 @press="goBack()" name="times" solid :style="styles('settingsScreen.closeButton')"/>
      </view>
      <view :style="styles('settingsScreen.settingsBody')">
        <view :style="styles('settingsScreen.settingLine')">
          <text :style="styles('settingsScreen.settingText')">Mode nuit</text>
          <switch
            :on-value-change = "handleChange"
            :value = "darkMode"
            :style="styles('settingsScreen.settingSwitch')"/>
        </view>
        <view :style="styles('settingsScreen.settingLine')">
          <text :style="styles('settingsScreen.settingText')" @press="logout()">Déconnexion</text>
        </view>
      </view>
    </view>
</template>

<script>
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default {
  components:{
    FontAwesome5,
  },
  props: {
    navigation: { type: Object }
  },
  methods:{
    logout(){
      this.$store.dispatch("LOGOUT", { navigation: this.navigation });
    },
    handleChange(val){
      this.$store.dispatch("TOGGLE_DARKMODE");
    },
    goBack(){
      this.navigation.goBack();
      this.$root.$emit("settingsBack");
    }
  },
  computed:{
    styles() {
      return this.$styles;
    },
    palettes(){
      return this.styles('palettes');
    },
    darkMode(){
      return this.$store.state.darkMode;
    }
  }
}
</script>

<style>
</style>