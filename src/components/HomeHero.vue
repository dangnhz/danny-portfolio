<template>
  <div class="home-hero-container">
    <div class="hero-content text-center w-100">
      <div class="hero-text-wrapper">
        <div id="text-hello" class="hero-text">
          <span class="letter">H</span>
          <span class="letter">e</span>
          <span class="letter">l</span>
          <span class="letter">l</span>
          <span class="letter">o</span>
          <span class="letter">,</span>
        </div>
      </div>
      <div class="hero-text-wrapper">
        <div id="text-danny" class="hero-text">
          <span class="letter">I</span>
          <span class="letter">'</span>
          <span class="letter">m</span>
          <span style="margin: 0 10px">&nbsp;</span>
          <span class="letter">D</span>
          <span class="letter">a</span>
          <span class="letter">n</span>
          <span class="letter">n</span>
          <span class="letter">y</span>
        </div>
      </div>
      <div class="hero-slogan-wrapper">
        <h2 id="slogan" class="hero-slogan">I build things for the web.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "home-hero",
  mounted() {
    //initial effect
    const tl = gsap.timeline();
    tl.set([".hero-text", ".hero-slogan"], {
      yPercent: 110,
    });

    tl.to(".hero-text", {
      duration: 0.5,
      yPercent: 0,
      stagger: 0.4,
    });
    tl.to(
      ".hero-slogan",
      {
        duration: 0.5,
        yPercent: 0,
      },
      "-=0"
    );

    // animate text on hover
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter) => {
      letter.addEventListener("mouseover", () => {
        letter.classList.add("animated");
        setTimeout(() => letter.classList.remove("animated"), 1000);
      });
    });
  },
};
</script>

<style lang="less">
@import "../assets/style/setting.less";

.home-hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "averta", sans-serif;
  color: @white;
  background-color: @bg-dark-2;

  @media @mobile, @large-mobile, @tablet {
    background-image: none;
    background-color: @bg-dark-2;
    height: 100vh;
  }

  .hero-content {
    width: fit-content;
    height: fit-content;
    transition: 0.3s;
    user-select: none;
    @media @mobile, @large-mobile, @tablet {
      transform: none;
    }
    .hero-text-wrapper {
      overflow: hidden;
      margin: 4rem 0;
    }

    .letter {
      line-height: 100%;
      display: inline-block;
      font-size: 10rem;
      letter-spacing: -0.5rem;
      font-weight: 800;
      transition: color 0.1s;
      @media @mobile, @large-mobile {
        font-size: 5rem;
      }
      @media @tablet {
        font-size: 8rem;
      }
      @media @large-desktop {
        font-size: 13rem;
      }

      // &:hover {
      //   color: @text-color;
      // }

      &.animated {
        @media @desktop, @large-desktop {
          animation: rubberBand 1s;
          // color: @text-color;
        }
      }
      @keyframes rubberBand {
        from {
          transform: scale3d(1, 1, 1);
        }

        30% {
          transform: scale3d(1.2, 0.75, 1);
        }

        40% {
          transform: scale3d(0.75, 1.25, 1);
        }

        50% {
          transform: scale3d(1.15, 0.85, 1);
        }

        65% {
          transform: scale3d(0.95, 1.05, 1);
        }

        75% {
          transform: scale3d(1.05, 0.95, 1);
        }

        to {
          transform: scale3d(1, 1, 1);
        }
      }
    }

    .hero-slogan-wrapper {
      overflow: hidden;
      .hero-slogan {
        @media @mobile, @large-mobile {
          font-size: 1rem;
        }
        @media @desktop {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>