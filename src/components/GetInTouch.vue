<template>
  <section class="get-in-touch">
    <div style="overflow:hidden">
      <h1 class="animated-slideUp">Get In Touch</h1>
    </div>
    <div style="overflow:hidden">
      <span class="line"></span>
    </div>
    <div style="overflow:hidden">
      <p class="animated-slideUp">
        I'm currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
    </div>
    <div style="overflow:hidden">
      <a class="flat-btn animated-slideUp" href="mailTo: dangnh3091@gmail.com">Say Hello</a>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "get-in-touch",
  mounted() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".line",
        start: "top 90%",
        toggleActions: "play complete none reverse",
        // markers: true,
      },
    });

    tl.from(".line", {
      width: 0,
      duration: 0.5,
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.get-in-touch {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  margin-bottom: 10rem;
  h1 {
    font-size: 5rem;
    font-family: "averta", sans-serif;
    font-weight: 900;
    @media @mobile, @large-mobile {
      font-size: 2rem;
    }
    @media @tablet {
      font-size: 3rem;
    }
  }

  .line {
    content: "";
    display: block;
    background: @text-color;
    width: 100px;
    height: 5px;
    margin: 2rem auto;
  }

  p {
    font-family: "averta", sans-serif;
    font-size: 1.2rem;
    max-width: 800px;
    @media @mobile, @large-mobile {
      padding: 1rem;
      font-size: 1rem;
    }
    @media @large-mobile {
      padding: 1rem;
      font-size: 1rem;
      max-width: 95%;
      margin: 0 auto;
    }
    @media @tablet {
      padding: 1rem;
      font-size: 1rem;
    }
  }

  a {
    margin: 0 auto;
  }
}
</style>