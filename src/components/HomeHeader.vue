<template>
  <div class="home-header-container">
    <div class="light"></div>
    <div class="hero-content text-center w-100">
      <h1 id="text-hello">Hello,</h1>
      <h1 id="text-danny">I'm Danny</h1>
      <h4>Front-end Web Developer</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: "home-header",
  mounted() {
    const headerContainer = document.querySelector(".home-header-container");
    const light = document.querySelector(".light");
    headerContainer.addEventListener("mousemove", e => {
      lighting(e)
      moveHero(e)
    });

  function lighting(e) {
      let x = e.pageX;
      let y = e.pageY;
      light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 55%)`
    }

  function moveHero(e) {
   let  hero = document.querySelector(".hero-content");
   
        var b = Math.ceil(window.innerWidth / 1.5),
            c = Math.ceil(window.innerHeight / 1.5),
            d = e.pageX - b,
            a = e.pageY - c,
            f = a / c,
            g = -(d / b),
            h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)),
            i = 10 * h;
        hero.style.transform = `rotate3d(${f}, ${g}, 0, ${i}deg)`
        // (browserPrefix + "transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
  }
  }
};
</script>

<style lang="less">
@import "../assets/style/setting.less";

.home-header-container {
  position: relative;
  width: 100%;
  height: 120vh;
  overflow: hidden;
  background-repeat: none;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000;
  color: @white;
  background-image: url("../assets/images/bg-4.jpeg");

  @media @mobile, @large-mobile, @tablet {
    background-image: none;
    background-color: @bg-dark-2;
    height: 100vh;
  }

  .hero-content {
    width: fit-content;
    height: fit-content;
    transform-style: preserve-3d;
    transition: 0.3s;
    margin-top: -5rem;
    @media @mobile, @large-mobile, @tablet {
      transform: none;
    }
      h1{
        font-size: 10rem;
        font-family: 'athena';
        letter-spacing: -0.5rem;
        font-weight: 800;
        @media @mobile, @large-mobile {
          font-size: 5rem;
        }
        @media @tablet {
          font-size: 8rem;
        }
        @media @large-desktop {
          font-size: 15rem;
        }
      }
      h4 {
        margin-top: 2rem;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 800;
        font-family: sans-serif;
        @media @mobile, @large-mobile {
          font-size: 1rem;
        }
      }
  }
  .light {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    display: block;
    height: 100%;
    width: 100%;
    background: radial-gradient(circle at 150px 150px, transparent, #000 35%);
    transition: background 0.5s ease;
    @media @mobile, @large-mobile, @tablet {
      display: none;
    }
  }

  .btn-scroll-down {
    color: @white;
    position: absolute;
    text-align: right;
    right: 5rem;
    bottom: 3rem;
    @media @mobile, @large-mobile {
      right: 1rem;
      bottom: 6rem;
    }
    .box {
      width: fit-content;
      margin: 0 auto;
    }

    .box span {
      width: 10px;
      height: 10px;
      display: block;
      border-right: 2px solid @white;
      border-bottom: 2px solid @white;
      transform: rotate(180deg);
      margin: -5px;
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
    transform: rotate(90deg);
    color: @white;
    font-family: "Lato";
    font-size: 1rem;
    margin-top: 3rem;
  }
}
</style>