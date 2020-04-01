import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
  Authorization: window.sessionStorage.getItem('Authorization') ? window.sessionStorage.getItem('Authorization') : ''
}
const mutations={
  changeLogin (state, user) {
    state.Authorization = user.Authorization;
    window.sessionStorage.setItem('Authorization', user.Authorization);
  }
}
const actions={}
export default new Vuex.Store({
  state,
  mutations,
  actions,
})
