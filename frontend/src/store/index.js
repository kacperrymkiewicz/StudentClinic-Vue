import { createStore } from "vuex";
import authModule from "./modules/auth/index.js"
import createPersistedState from "vuex-persistedstate";
//import VuexPersistence from 'vuex-persist'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default createStore({
  plugins: [createPersistedState()],
  //plugins: [vuexLocal.plugin],
  modules: {
    auth: authModule
  },
});
