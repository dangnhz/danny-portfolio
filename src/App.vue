<template>
  <div id="app">
    <!-- <nav-menu></nav-menu> -->
    <NavigationBar></NavigationBar>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
//import NavMenu from './components/NavMenu'
export default {

  name:'app',
  components: {
    NavigationBar,
  },
}
</script>

<style lang="less">

* {
  padding: 0;
  margin: 0;
}
html, body {
    height: 100%;
    -webkit-overflow-scrolling: auto !important;
}
html {
    overflow-y: hidden;
}
body {
    overflow-y: scroll;
}

a {
  text-decoration: none !important;
}

li {
  list-style-type: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
