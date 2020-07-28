import Vue from 'vue';
import Vuex from 'vuex';
import projects from './projects';
Vue.use(Vuex);
const state = {
  showMenu: false,
  projects: projects,
};

const getters = {
  getAllProjects(state) {
    return state.projects;
  },
  getSingleProject: (state) => (project_name) => {
    return state.projects.find((project) => project.name === project_name);
  },
  getHomeProjects(state) {
    return state.projects.filter((project) => project.isHome === true);
  },
};

const mutations = {
  toggleMenu: (state) => {
    state.showMenu = !state.showMenu;
  },
};
const actions = {
  TOGGLE_MENU: ({ commit }) => {
    commit('toggleMenu');
  },
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
