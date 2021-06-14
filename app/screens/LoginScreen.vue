<template>
  <image-background
        :source="require('../assets/img/background-login-screen-gradient.jpg')"
        :style="{ width: '100%', height: '100%'}"
      >
    <view :style="styles('loginScreen.page')">
      <image
        :source="imgs.logoVertivalDark"
        :style="styles('loginScreen.logo')"
      />
      <view 
        class="containerConnexionForm"
        :style="styles('loginScreen.containerConnexionForm')"
      >
        <text class="headerConnexionForm" :style="styles('loginScreen.headerConnexionForm')">Connectez-Vous</text>
        <text-input placeholder="E-mail" v-model="email" :style="styles('loginScreen.inputForm')"/>
        <text-input placeholder="Mot de passe" v-model="password" :style="styles('loginScreen.inputForm')"/>
        <linear-gradient  
          :start="{x: 0, y: 0}" :end="{x: 1, y: 0}" 
          :colors="[styles('loginScreen.colorsButton.color1'), styles('loginScreen.colorsButton.color2')]" 
          :style="styles('loginScreen.button')"
          >
            <Text :style="styles('loginScreen.textButton')" @press="login">
              Go
            </Text>
             <FontAwesome5  name="arrow-right" :style="styles('loginScreen.arrowButton')" solid/>
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
      return this.$styles;
    },
    imgs() {
      return this.$imgs;
    }
  }
}
</script>

<style>
</style>