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
      url:"https://mirk.co",
      coverImage: require('../assets/images/mirk-ver.jpg'),
      siteImage: require('../assets/images/mirk-site.jpg'),
      workImage: require('../assets/images/mirk-hor.jpg'),
      desc: "I made this company’s landing page during my internship at Mirk. The front-end was built with Vue.js and Bootstrap, animations were done with GSAP."
    },
    {
      id: 2,
      name:'photo-finder',
      title: "Photo Finder",
      category: "Website",
      url:"https://dangnhz.github.io/photo-finder",
      coverImage: require('../assets/images/photo-finder-ver.jpg'),
      siteImage: require('../assets/images/photo-finder.jpg'),
      workImage: require('../assets/images/photo-finder-hor.jpg'),
      desc: "This website was created based on Vue.js framework and Unsphash’s API. It enables the users to search and download free high-resolution photos from photographers over the world."
    },
    {
      id: 3,
      name:'vue-weather',
      title: "Vue Weather",
      category: "Website",
      url:"https://vue-weather.dangnhz.now.sh",
      coverImage: require('../assets/images/weather-ver.jpg'),
      siteImage: require('../assets/images/weather-ver.jpg'),
      workImage: require('../assets/images/weather-hor.jpg'),
      desc: "A simple weather application made with Vue.js and Dark Sky's API. It shows current weather conditon as well as the forecast for the next 7 days based on user's location",

    },
    {
      id: 4,
      name:'vue-weather',
      title: "Vue Weather",
      category: "Website",
      url:"https://vue-weather.dangnhz.now.sh",
      coverImage: require('../assets/images/weather-ver.jpg'),
      siteImage: require('../assets/images/weather-ver.jpg'),
      workImage: require('../assets/images/weather-hor.jpg'),
      desc: "A simple weather application made with Vue.js and Dark Sky's API. It shows current weather conditon as well as the forecast for the next 7 days based on user's location",

    },
    {
      id: 5,
      name:'vue-weather',
      title: "Vue Weather",
      category: "Website",
      url:"https://vue-weather.dangnhz.now.sh",
      coverImage: require('../assets/images/weather-ver.jpg'),
      siteImage: require('../assets/images/weather-ver.jpg'),
      workImage: require('../assets/images/weather-hor.jpg'),
      desc: "A simple weather application made with Vue.js and Dark Sky's API. It shows current weather conditon as well as the forecast for the next 7 days based on user's location",

    },
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
