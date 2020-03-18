import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  showMenu: false,
  projects: [
    {
      id: 1,
      name:'project-1',
      title: "Project 1",
      category: "Website",
      imgCover:
        "https://images.unsplash.com/photo-1584308032011-d289f91420ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    },
    {
      id: 2,
      name:'project-2',
      title: "Project 2",
      category: "Website",
      imgCover:
        "https://images.unsplash.com/photo-1582643381669-4ad3e9cdac73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    },
    {
      id: 3,
      name:'project-3',
      title: "Project 3",
      category: "Website",
      imgCover:
        "https://images.unsplash.com/photo-1582643381669-4ad3e9cdac73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities.",

    },
    {
      id: 4,
      name:'project-4',
      title: "Project 4",
      category: "Website",
      imgCover:
        "https://images.unsplash.com/photo-1582643381669-4ad3e9cdac73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        desc: "kronik is the storytelling platform specially designed to help startups and companies tell their stories and engage their communities."
    },
    {
      id: 5,
      name:'project-5',
      title: "Project 5",
      category: "Website",
      imgCover:
        "https://images.unsplash.com/photo-1582643381669-4ad3e9cdac73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
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
