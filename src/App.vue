<template>
  <div id="app">
    <Spinner v-if="loading" />

    <NavigationBar></NavigationBar>
    <div class="smooth-container">
      <router-view></router-view>
      <MainFooter></MainFooter>
    </div>
    <NewGlobalCursor :targets="['a', 'button']"></NewGlobalCursor>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import MainFooter from "./components/MainFooter";
import NewGlobalCursor from "./components/NewGlobalCursor";
import Spinner from "./components/Spinner";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default {
  name: "app",
  components: {
    NavigationBar,
    MainFooter,
    NewGlobalCursor,
    Spinner,
  },
  data: function () {
    return {
      scroller: undefined,
    };
  },
  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  },
  methods: {
    setScroll() {
      let _self = this;
      _self.scroller = new LocomotiveScroll({
        el: document.querySelector(".smooth-container"),
        smooth: true,
      });

      gsap.registerPlugin(ScrollTrigger);

      _self.scroller.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(".smooth-container", {
        scrollTop(value) {
          return arguments.length
            ? _self.scroller.scrollTo(value, 0, 0)
            : _self.scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      ScrollTrigger.addEventListener("refresh", () => _self.scroller.update());

      ScrollTrigger.refresh();
    },
  },
  mounted() {
    this.setScroll();
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
  watch: {
    loading: function (val) {
      let _self = this;
      if (!val && _self.scroller != undefined) {
        setTimeout(function () {
          _self.scroller.update();
        }, 500);
      }
    },
    $route() {
      let _self = this;
      setTimeout(function () {
        _self.scroller.update();
      }, 500);
    },
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
  background: @bg-dark;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-bottom: 0px !important;
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
.c-scrollbar_thumb {
  background-color: @text-color;
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
    text-transform: uppercase;
    border-radius: 4px;
    text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.36);
    border: 1px solid #000;
    float: left;
    color: @white;
    border-color: transparent;
    margin-top: 3rem;
    background: @text-color;
    transition: padding 200ms linear;
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
