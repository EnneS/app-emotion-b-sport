<template>
  <view :style="styles('page')">
    <TouchableOpacity @press="goTo('https://emotion-b-sport.com')">
      <image
        :source="darkMode ? imgs.logoVertivalDark : imgs.logoVertivalLight"
        :style="styles('contactScreen.logo')"
      />
    </TouchableOpacity>
    <TouchableOpacity  :style="styles('contactScreen.mail')" @press="goTo('mailto:'+ mail)">
      <FontAwesome5 name="envelope" :style="styles('contactScreen.envelope')" solid/>
      <text :style="styles('contactScreen.mailText')">{{ mail }}</text>
    </TouchableOpacity>
    <view :style="styles('contactScreen.socials')">
      <TouchableOpacity @press="goTo('https://www.facebook.com/emotionbsport/')">
        <FontAwesome5 name="facebook" :style="[styles('contactScreen.socialLogo'), {color: '#4267B2'}]" solid/>
      </TouchableOpacity>
      <view :style="styles('contactScreen.line')"/>
      <TouchableOpacity @press="goTo('https://twitter.com/J0hn_Isaiah')">
        <FontAwesome5 name="twitter" :style="[styles('contactScreen.socialLogo'), {color: '#1DA1F2'}]" solid/>
      </TouchableOpacity>
      <view :style="styles('contactScreen.line')"/>
      <TouchableOpacity @press="goTo('https://www.youtube.com/channel/UCiIn6sfX7divZfaKDVS45nw')">
        <FontAwesome5 name="youtube" :style="[styles('contactScreen.socialLogo'), {color: '#FF0000'}]" solid/>
      </TouchableOpacity>
    </view>
  </view>
</template>

<script>
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Linking } from 'react-native';

export default {
  components:{
    FontAwesome5
  },
  props: {
    navigation: { type: Object }
  },
  data(){
    return {
      mail: "contact@emotion-b-sport.com"
    }
  },
  computed:{
    user(){
      return this.$store.state.user;
    },
    styles() {
      return this.$styles;
    },
    imgs() {
      return this.$imgs;
    },
    darkMode(){
      return this.$store.state.darkMode;
    }
  },
  methods: {
    goTo(url){
      console.log(url);
      Linking.openURL(url);
    },
  }
}
</script>

<style>
.social-logo{
  font-size: 72px;
}
.line {
  width: 25px;
  height:2px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: white;
}
.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
}
.envelope{
  color:white;
  font-size: 52;
  margin-right: 18;
}
.mail{
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80;
}
.mail-text{
  font-size:16px;
  color: white;
}
</style>