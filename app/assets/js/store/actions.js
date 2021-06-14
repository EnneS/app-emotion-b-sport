import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';
import { vuexLocal } from "./index";

export function LOGIN({commit, state}, {user, navigation}) {
    commit("LOGGING_IN", true);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit("LOGIN_SUCCESFUL", { user });

            const navigateAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Logged" })],
              });
        
            navigation.dispatch(navigateAction);

            resolve();
        }, 1000);
    });
}

export function LOGOUT({commit}, {navigation}) {
    commit("LOGOUT");
    return new Promise((resolve, reject) => {
        const navigateAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Login" })],
          });
    
        navigation.dispatch(navigateAction);

        resolve();
    })
}

export function TOGGLE_DARKMODE({commit}) {
    return commit("TOGGLE_DARKMODE");
}