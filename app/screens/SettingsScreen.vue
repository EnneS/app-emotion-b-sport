<template>
    <view :style="{backgroundColor: darkMode ? palettes.dark.bg : palettes.light.bg}" class="body">
      <view :style="styles.header">
        <text :style="styles.headerText">Paramètres</text>
        <FontAwesome5 @press="goBack()" name="times" solid :style="styles.closeButton"/>
      </view>
      <view :style="styles.settingsBody">
        <view :style="styles.settingLine">
          <text :style="styles.settingText">Mode nuit</text>
          <switch
            :on-value-change = "handleChange"
            :value = "darkMode"
            :style = "styles.settingSwitch"/>
        </view>
        <view :style="styles.settingLine">
          <text :style="styles.settingText" @press="logout()">Déconnexion</text>
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
    }
  },
  computed:{
    styles() {
      return this.$styles.settingsScreen;
    },
    palettes(){
      return this.$styles.palettes;
    },
    darkMode(){
      return this.$store.state.darkMode;
    }
  }
}
</script>

<style>
.body {
  height:100%;
}
</style>