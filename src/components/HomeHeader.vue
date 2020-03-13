<template>
  <div class="home-header-container">
    <div class="light"></div>
    
    <div class="hero-content text-center w-100">
        <div class=text-1>I am</div>
        <div id="danny" class="text-2">DANNY</div>
        <div class="text-3">A FRONT-END <br> WEB DEVELOPER </div>
    </div>
    <div class="btn-scroll-down text-right">
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
export default {
  name: "home-header",
  mounted() {
    const danny= document.querySelector("#danny");
    const headerContainer = document.querySelector(".home-header-container");
    const light = document.querySelector(".light");
    headerContainer.addEventListener("mousemove", e => {
      let x = e.pageX;
      let y = e.pageY;
      light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 35%)`;

      // move DANNY
      let dx = (window.innerWidth / 2 - x) / 20;
      let dy = (window.innerHeight / 2 - y) / 20;
      danny.style.transform = `translate(${dx}px, ${dy}px)`;

    });
  }
};
</script>

<style lang="less">
@import "../assets/style/setting.less";

.home-header-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-repeat: none;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: @bg-dark;
  color: @white;
  background-image: url("../assets/images/bg-1.jpg");
  @media @mobile, @large-mobile, @tablet {
    // height: 50vh;
    background-image: none;
    background-color: @bg-dark;
  }

  .hero-content {
    position: absolute;
    width: 100%;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .text-1 {
      text-transform: uppercase;
      width: 50%;
      margin: 0 auto;
      text-align: left;
      padding-left: 7rem;
      font-family: 'Lato-Bold';
      @media @mobile, @large-mobile {
        padding-left: 2rem;
        width: 90%;
      }
      @media @tablet {
        padding-left: 5rem;
        width: 80%;
      }
    }
    .text-3 {
      width: 50%;
      margin: 0 auto;
      text-align: right;
      padding-right: 7rem;
      font-family: 'Lato-Bold';
      @media @mobile, @large-mobile,@tablet {
        padding-right: 2rem;
        width: 90%;
      }
      @media @tablet {
        padding-right: 5rem;
        width: 80%;
      }
    }
    .text-2 {
      width: 100%;
      font-size: 15vw;
      font-weight: 800;
      line-height: 15vw;
      color: @white;
      transition: transform 0.2s;
      @media @mobile, @large-mobile, @tablet {
        font-size: 25vw;
        line-height: 25vw;
        transform: none !important;
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