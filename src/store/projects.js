const projects = [
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
      'This beautiful company’s landing page is the creation of a simple and clean design with immersive animations and page transition effects.',
    tech: ['Vue', 'Bootstrap', 'GSAP', 'Scroll Magic'],
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
      'A single page web application made with React. This app enables you to search and play music from YouTube quickly. It also allows you to view your recent played songs and save your favorite tracks.',
    tech: ['React', 'Redux', 'Material-UI'],
  },
  {
    id: 3,
    name: 'insta-card',
    title: 'InstaCard Maker',
    category: 'Website',
    url: 'https://instacard.now.sh',
    coverImage: require('../assets/images/insta-card.jpg'),
    siteImage: require('../assets/images/insta-card-ver.png'),
    workImage: require('../assets/images/insta-card-hor.jpg'),
    desc:
      'A nice web application for creating beautiful images with impressive background blur effect from Instagram post’s URL just by one click.',
    tech: ['Vue', 'Instagram API'],
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
      'A single page web application for searching and downloading free high-resolution photos from photographers around the world.',
    tech: ['Vue', 'Bootstrap', 'Unsplash API'],
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
      "A simple weather web application built with Vue.js which shows current weather condition as well as the forecast for the next 7 days based on user's location.",
    tech: ['Vue', 'Bootstrap', 'Dark Sky API'],
  },
];

export default projects;
