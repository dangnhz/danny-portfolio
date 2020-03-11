<template>
  <div class="home">
    <HomeHeader id="home-header"></HomeHeader>
    <AboutMe></AboutMe>
    <project-carousel></project-carousel>
    <div class="clearfix"></div>
    <MyResume></MyResume>
    <GlobalCursor></GlobalCursor>
  </div>
</template>

<script>
// import VerticalLine from '../components/VerticalLine'
import HomeHeader from "../components/HomeHeader";
import AboutMe from "../components/AboutMe";
import GlobalCursor from "../components/GlobalCursor";
import ProjectCarousel from "../components/ProjectCarousel";
import MyResume from "../components/MyResume";

// import gsap from 'gsap';

export default {
  name: "Home",
  components: {
    GlobalCursor,
    ProjectCarousel,
    HomeHeader,
    AboutMe,
    MyResume
  },
  mounted() {
    let scene = this.$scrollmagic
      .scene({
        triggerElement: "#about-me",
        duration: "50%",
        triggerHook: 0.9
      })
      .setTween("#home-header", {
        opacity: 0
      });
    this.$scrollmagic.addScene(scene);
  }
};
</script>

<style>
.home {
  cursor: none;
  width: 100%;
  height: 100%;
}
</style>
