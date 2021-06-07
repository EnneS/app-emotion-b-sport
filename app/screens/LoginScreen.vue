<template>
  <image-background
        :source="require('../assets/img/background-login-screen-gradient.jpg')"
        :style="{ width: '100%', height: '100%'}"
      >
    <view :style="styles.page">
      <image
        :source="imgs.logoVertivalDark"
        :style="styles.logo"
        class="logo"
      />
      <view 
        class="containerConnexionForm"
        :style="styles.containerConnexionForm"
      >
        <text class="headerConnexionForm" :style="styles.headerConnexionForm">Connectez-Vous</text>
        <text-input placeholder="E-mail" v-model="email" class="inputConnexionForm"/>
        <text-input placeholder="Mot de passe" v-model="password" class="inputConnexionForm"/>
        <linear-gradient  
          :start="{x: 0, y: 0}" :end="{x: 1, y: 0}" 
          :colors="['#21C8F6', '#637BFF']" 
          class="color-button"
          >
            <Text class="text-button">
              Go
            </Text>
             <FontAwesome5 name="arrow-right" color="white" class="arrow-button" solid/>
          <!-- <button title="Go" @press="login"></button> -->
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
  methods:{
    async login(){
      const navigateAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Logged" })],
      });

      this.navigation.dispatch(navigateAction);
    }
  },
  computed: {
    styles() {
      return this.$styles.loginScreen;
    },
    imgs() {
      return this.$imgs;
    }
  }
}
</script>

<style>
.arrow-button {
  position: absolute;
  right: 5;
  top: 10;
  font-size: 15;
}


.text-button {
  color: white;
  text-align: center;
  text-align-vertical: center;
  height: 36;
}

.color-button {
  border-radius: 5;
  elevation: 5;
}

.logo {
  width: 275;
  height: 150;
  margin-bottom: 20;
}

.containerConnexionForm {
			width: 300;
			background-color: #f9f9f9;
			border-radius: 1;
      padding: 25;
      display: flex;
      justify-content: space-around;
}

.headerConnexionForm {
  color: #393939;
  font-size: 25;
  margin-bottom: 15;
  font-family: 'Roboto';
}

.inputConnexionForm {
  font-size: 17;
  height: 40;
  color: #808080;
  border-bottom-color: #808080;;
  border-bottom-width: 1;
  margin-bottom: 20;
  padding-left: 0;
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