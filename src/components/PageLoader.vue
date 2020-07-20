<template>
  <div id="page-loader">
    <div class="loader-item"></div>
    <div class="loader-item"></div>
    <div class="loader-item"></div>
    <div class="loader-item"></div>
    <div class="loader-item"></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "page-loader",

  mounted() {
    let timeline = gsap.timeline({ paused: true });
    timeline
      .fromTo(
        ".loader-item",
        {
          height: "1px"
        },
        {
          height: "100vh",
          stagger: 0.1,
          duration: 0.5,
          ease: "none"
        }
      )
      .to(".loader-item", {
        height: "0",
        stagger: 0.1,
        duration: 0.5,
        ease: "none"
      })
      .to("#page-loader", {
        opacity: 0,
        visibility: "invisible",
        display: "none",
        duration: 0.5
      });
    timeline.play();
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
#page-loader {
  width: 100%;
  height: 100vh;
  display: flex;
  // align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: @bg-dark;
  z-index: 99999;
  pointer-events: none;
  .loader-item {
    height: 0;
    width: 20%;
    background: @text-color;
    display: block;
  }
}
</style>