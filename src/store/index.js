import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  showMenu: false,
  projects: [
    {
      id: 1,
      name: 'mirk',
      title: 'Mirk',
      category: 'Website',
      url: 'https://mirk.co',
      coverImage: require('../assets/images/mirk-ver.jpg'),
      siteImage: require('../assets/images/mirk-site.jpg'),
      workImage: require('../assets/images/mirk-hor.jpg'),
      desc:
        'This company’s landing page is the creation of a simple and clear design with immersive animations and page transition effects. The technologies used are Vue.js, Bootstrap, GSAP and ScrollMagic.',
    },
    {
      id: 2,
      name: 'react-music',
      title: 'React Music',
      category: 'Website',
      url: 'https://dangnhz.github.io/react-music',
      coverImage: require('../assets/images/react-music-ver.jpg'),
      siteImage: require('../assets/images/react-music-ver.jpg'),
      workImage: require('../assets/images/react-music-hor.jpg'),
      desc:
        'An awesome music application made with React and Material-UI. This app enables the users to search and listen to music from YouTube easily.',
    },
    {
      id: 3,
      name: 'insta-card',
      title: 'InstaCard Maker',
      category: 'Web Application',
      url: 'https://instacard.now.sh',
      coverImage: require('../assets/images/insta-card.jpg'),
      siteImage: require('../assets/images/insta-card-ver.png'),
      workImage: require('../assets/images/insta-card-hor.jpg'),
      desc:
        'This app allows the users to create beautiful images with impressive background blur effect from their Instagram post’s URL just by one click.',
    },
    {
      id: 4,
      name: 'photo-finder',
      title: 'Photo Finder',
      category: 'Website',
      url: 'https://dangnhz.github.io/photo-finder',
      coverImage: require('../assets/images/photo-finder-ver.jpg'),
      siteImage: require('../assets/images/photo-finder.jpg'),
      workImage: require('../assets/images/photo-finder-hor.jpg'),
      desc:
        'This website was created based on Vue.js framework and Unsplash’s API. It enables the users to search and download free high-resolution photos from photographers over the world.',
    },

    {
      id: 5,
      name: 'vue-weather',
      title: 'Vue Weather',
      category: 'Website',
      url: 'https://vue-weather.dangnhz.now.sh',
      coverImage: require('../assets/images/weather-ver.jpg'),
      siteImage: require('../assets/images/weather-ver.jpg'),
      workImage: require('../assets/images/weather-hor.jpg'),
      desc:
        "A simple weather application made with Vue.js and Dark Sky's API. It shows current weather condition as well as the forecast for the next 7 days based on user's location",
    },
  ],
};

const getters = {
  getAllProjects(state) {
    return state.projects;
  },
  getSingleProject: (state) => (project_name) => {
    return state.projects.find((project) => project.name === project_name);
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
