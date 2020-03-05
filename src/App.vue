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

html {
    scroll-behavior: smooth !important;
}

a {
  text-decoration: none !important;
  // color: #fff !important;
}

li {
  list-style-type: none;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
}

</style>
