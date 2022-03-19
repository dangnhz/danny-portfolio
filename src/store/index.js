import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../firebase';

Vue.use(Vuex);
const state = {
  projects: [],
  loading: false,
};

const getters = {
  getAllProjects(state) {
    return state.projects.filter((project) => project.isPublic === true);
  },
  getSingleProject: (state) => (project_name) => {
    return state.projects.find((project) => project.slug === project_name);
  },
  getHomeProjects(state) {
    return state.projects.filter((project) => project.showOnHomePage === true);
  },
  getLoading(state) {
    return state.loading;
  },
};

const mutations = {
  fetchProjects: (state, data) => {
    state.projects = data;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  },
};
const actions = {
  FETCH_PROJECTS: ({ commit }) => {
    commit('setLoading', true);
    db.collection('projects')
      .orderBy('order', 'asc')
      .onSnapshot((snapshot) => {
        let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        commit('fetchProjects', data);
        commit('setLoading', false);
      });
  },
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
