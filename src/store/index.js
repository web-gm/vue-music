import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    changeNetwork: false,
    loginSuccess: false,
    token: null
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
