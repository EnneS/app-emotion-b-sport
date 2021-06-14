<template>
  <image-background
        :source="require('../assets/img/background-login-screen-gradient.jpg')"
        :style="{ width: '100%', height: '100%'}"
      >
    <view :style="styles.page">
      <image
        :source="imgs.logoVertivalDark"
        :style="styles.logo"
      />
      <view 
        class="containerConnexionForm"
        :style="styles.containerConnexionForm"
      >
        <text class="headerConnexionForm" :style="styles.headerConnexionForm">Connectez-Vous</text>
        <text-input placeholder="E-mail" v-model="email" :style="styles.inputForm"/>
        <text-input placeholder="Mot de passe" v-model="password" :style="styles.inputForm"/>
        <linear-gradient  
          :start="{x: 0, y: 0}" :end="{x: 1, y: 0}" 
          :colors="[styles.colorsButton.color1, styles.colorsButton.color2]" 
          :style="styles.button"
          >
            <Text :style="styles.textButton" @press="login">
              Go
            </Text>
             <FontAwesome5  name="arrow-right" :style="styles.arrowButton" solid/>
        </linear-gradient>
      </view>
    </view>
  </image-background>
</template>

<script>
import { StackActions, NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default {
  components: {
    LinearGradient,
    FontAwesome5
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    navigation: { type: Object }
  },
  created(){
    this.$store._vm.$root.$on("storageReady", () => {
        console.log("stateBeingFilled", this.$store.state.user.name == undefined);
        if (this.$store.state.user.name != undefined) {
          console.log(this.$store.state.user);
          
          const navigateAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Logged" })],
          });
        
          this.navigation.dispatch(navigateAction);
        } else {
          console.log("Not logged in");
        }
    });
  },
  methods:{
    async login(){
      let user = {
        name: "Nathan",
      };

      this.$store.dispatch("LOGIN", {
        user, 
        navigation: this.navigation
      });

    }
  },
  computed: {
    styles() {
      return this.$styles.getStyles("light").loginScreen;
    },
    imgs() {
      return this.$imgs;
    }
  },
  created() {
    this.login()
  }
}
</script>

<style>
</style>