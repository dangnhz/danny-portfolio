import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  showMenu: false,
  projects: [
    {
      id: 1,
      name:'mirk',
      title: "Mirk",
      category: "Website",
      url:"http://mirk.co",
      coverImage: require('../assets/images/mirk-cover.jpg'),
      siteImage: require('../assets/images/mirk-site.jpg'),
      workImage: require('../assets/images/photo-finder-work.jpg'),
      desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    },
    {
      id: 2,
      name:'photo-finder',
      title: "Photo Finder",
      category: "Website",
      url:"http://dangnhz.github.io/photo-finder",
      coverImage: require('../assets/images/photo-finder.jpg'),
      siteImage: require('../assets/images/photo-finder.jpg'),
      workImage: require('../assets/images/photo-finder-work.jpg'),
      desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    },
    {
      id: 3,
      name:'project-3',
      title: "Project 3",
      category: "Website",
      url:"http://dangnhz.github.io/photo-finder",
      coverImage: require('../assets/images/mirk-cover.jpg'),
      siteImage: require('../assets/images/mirk-site.jpg'),
      workImage: require('../assets/images/photo-finder-work.jpg'),
      desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities.",

    },
    {
      id: 4,
      name:'project-4',
      title: "Project 4",
      category: "Website",
      url:"http://dangnhz.github.io/photo-finder",
      coverImage: require('../assets/images/mirk-cover.jpg'),
      siteImage: require('../assets/images/mirk-site.jpg'),
      workImage: require('../assets/images/photo-finder-work.jpg'),
        desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    },
    {
      id: 5,
      name:'project-5',
      title: "Project 5",
      category: "Website",
      url:"http://dangnhz.github.io/photo-finder",
      coverImage: require('../assets/images/mirk-cover.jpg'),
      siteImage: require('../assets/images/mirk-site.jpg'),
      workImage: require('../assets/images/photo-finder-work.jpg'),
      desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    }
  ]
}

const getters = {
    getAllProjects (state) {
      return state.projects
    },
    getSingleProject: (state) => (project_name) => {
      return state.projects.find(project => project.name === project_name)
      
    }
    
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
  getters,
  actions
})
