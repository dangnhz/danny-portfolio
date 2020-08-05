import Vue from 'vue';
import Vuex from 'vuex';
// import projects from './projects';
import { db } from '../firebase';

Vue.use(Vuex);
const state = {
  projects: [],
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
};

const mutations = {
  fetchProjects: (state, data) => {
    state.projects = data;
  },
};
const actions = {
  FETCH_PROJECTS: ({ commit }) => {
    db.collection('projects')
      .orderBy('createdAt', 'asc')
      .onSnapshot((snapshot) => {
        let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        commit('fetchProjects', data);
      });
  },
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
