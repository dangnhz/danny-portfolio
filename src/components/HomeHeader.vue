<template>
  <div class="home_header-container">
    <div class="light"></div>
    <div class="hero-content text-center w-100">
      <h3>HI THERE, I'M</h3>
      <h1>
        <vue-typer :text="['Danny Ngo', 'Front-end Developer']" erase-style="clear"></vue-typer>
      </h1>
    </div>
    <div class="btn-scroll-down">
      <a href="#about-me">
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="text-scroll">Scroll</div>
      </a>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "home-header",
  components: {
    VueTyper
  },
  data() {
    return {
      smoothScroll: { duration: 1000, offset: -100 }
    };
  },
  mounted() {
    const headerContainer = document.querySelector(".home_header-container");
    const light = document.querySelector(".light");
    headerContainer.addEventListener("mousemove", e => {
      let x = e.pageX;
      let y = e.pageY;
      light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 50%)`;
    });
  }
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
@import (css)
  url("https://fonts.googleapis.com/css?family=Amatic+SC&display=swap");
@import (css)
  url("https://fonts.googleapis.com/css?family=Reenie+Beanie&display=swap");
.home_header-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-repeat: none;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  //background-image: url("https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1929&q=80");
  background-image: url("../assets/images/bg-3.jpg");
  @media @mobile, @large-mobile, @tablet {
    background-image: none;
    background-color: @bg-dark;
  }

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      font-size: 3.5rem;
      font-family: "Amatic SC", cursive;
      font-weight: 900;
      color: @text-color;
      @media @mobile, @large-mobile {
        font-size: 2rem;
      }
    }
    h1 {
      height: 8rem;
      font-size: 6rem;
      font-family: "Reenie Beanie", cursive;
      font-weight: 500;
      @media @mobile, @large-mobile {
        font-size: 3rem;
      }
      .vue-typer .custom.char.typed {
        color: #fff;
      }
      .vue-typer .custom.caret {
        display: none;
      }
    }
  }
  .light {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    transition: background 0.5s ease;
    @media @mobile, @large-mobile, @tablet {
      display: none;
    }
  }

  .btn-scroll-down {
    color: @white;
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6rem;

    .box {
      width: fit-content;
      margin: 0 auto;
    }

    .box span {
      width: 20px;
      height: 20px;
      display: block;
      border-right: 2px solid @white;
      border-bottom: 2px solid @white;
      transform: rotate(180deg);
      margin: -10px;
      animation: animate 2s infinite;
    }

    .box span:nth-child(2) {
      animation-delay: -0.2s;
    }

    .box span:nth-child(3) {
      animation-delay: -0.4s;
    }

    @keyframes animate {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
        transform: rotate(45deg) translate(10px, 10px);
      }
      100% {
        opacity: 0;
      }
    }
  }

  .text-scroll {
    color: @white;
    font-family: "Lato";
    font-size: 1rem;
    margin-top: 2rem;
  }
}
</style>