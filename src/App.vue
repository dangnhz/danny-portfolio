<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view></router-view>
    <MainFooter></MainFooter>
    <NewGlobalCursor :targets="['a', 'button']"></NewGlobalCursor>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import MainFooter from "./components/MainFooter";
import NewGlobalCursor from "./components/NewGlobalCursor";

export default {
  name: "app",
  components: {
    NavigationBar,
    MainFooter,
    NewGlobalCursor,
  },
};
</script>

<style lang="less">
@import "./assets/style/setting.less";
@import (css)
  url("https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap");
@import (css)
  url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box !important;
}

body {
  overscroll-behavior-y: none !important;
}

a {
  text-decoration: none !important;
}

li {
  list-style-type: none;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: @bg-dark;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: @text-color;
  border-radius: 10px;
}

#app {
  font-family: "averta", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: @bg-dark;

  .flat-btn {
    text-align: center;
    box-sizing: border-box;
    padding: 10px 30px;
    position: relative;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 4px;
    transition: all 200ms linear;
    text-transform: uppercase;
    border-radius: 4px;
    text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.36);
    border: 1px solid #000;
    float: left;
    color: @white;
    border-color: transparent;
    margin-top: 3rem;
    background: @text-color;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 20px;
      height: 1px;
      width: 0;
      -webkit-transition: all 200ms linear;
      -moz-transition: all 200ms linear;
      -o-transition: all 200ms linear;
      -ms-transition: all 200ms linear;
      transition: all 200ms linear;
    }

    &:hover {
      padding-left: 60px;
      &:before {
        width: 30px;
        background: @white;
      }
    }
  }
}
</style>
