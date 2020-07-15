<template>
  <div class="home-header-container">
    <div class="light"></div>
    <div class="hero-content text-center w-100">
      <h1 id="text-hello">Hello,</h1>
      <h1 id="text-danny">I'm Danny</h1>
      <h4>Front-end Developer</h4>
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
      lighting(e);
      moveHero(e);
    });

    function lighting(e) {
      let x = e.pageX;
      let y = e.pageY;
      light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 55%)`;
    }

    function moveHero(e) {
      let hero = document.querySelector(".hero-content");

      var b = Math.ceil(window.innerWidth / 1.5),
        c = Math.ceil(window.innerHeight / 1.5),
        d = e.pageX - b,
        a = e.pageY - c,
        f = a / c,
        g = -(d / b),
        h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)),
        i = 10 * h;
      hero.style.transform = `rotate3d(${f}, ${g}, 0, ${i}deg)`;
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
  background-color: @bg-dark-2;
  // background-image: url("https://images.unsplash.com/photo-1547997853-17516ad3266f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");

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
    user-select: none;
    @media @mobile, @large-mobile, @tablet {
      transform: none;
    }
    h1 {
      font-size: 10rem;
      font-family: "averta", sans-serif;
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
      font-family: "averta", sans-serif;
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
    display: none;
    background: radial-gradient(circle at 150px 150px, transparent, #000 35%);
    transition: background 0.5s ease;
    @media @mobile, @large-mobile, @tablet {
      display: none;
    }
  }
}
</style>