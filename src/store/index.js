import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  showMenu: false
}
const mutations= {
  toggleMenu: (state) => {
    state.showMenu = !state.showMenu
  }
}
const actions= {
  TOGGLE_MENU: ({commit}) => {
    commit('toggleMenu')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
