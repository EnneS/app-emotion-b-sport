import Vuex from 'vuex';
import Vue from "vue-native-core";
import * as actions from "./actions";
import * as mutations from "./mutations";
import VuexPersistence from "vuex-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    strictMode: true,
    asyncStorage: true,
    storage: AsyncStorage,
});

const vuexPersistEmitter = () => {
    return store => {
        store.subscribe(mutation => {
        console.log(mutation.type);
        if (mutation.type === "RESTORE_MUTATION") {
            console.log("345345345");
            store._vm.$root.$emit("storageReady");
        }
        });
    };
};

Object.assign(mutations, {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
});

const store = new Vuex.Store({
    actions,
    mutations,
    plugins: [vuexLocal.plugin, vuexPersistEmitter()],
    state: {
        user: {},
        loggingIn: false,
        loggedIn: false,
        darkMode: false,
    }
});

export default store;
export { vuexLocal };