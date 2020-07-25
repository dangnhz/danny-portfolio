<template>
  <div class="home">
    <HomeHero id="home-hero"></HomeHero>
    <Introduction></Introduction>
    <project-carousel></project-carousel>
    <div class="clearfix"></div>
    <AboutMe></AboutMe>
    <GetInTouch></GetInTouch>
  </div>
</template>
<script>
import HomeHero from "../components/HomeHero";
import Introduction from "../components/Introduction";
import ProjectCarousel from "../components/ProjectCarousel";
import AboutMe from "../components/AboutMe";
import GetInTouch from "../components/GetInTouch";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import gsap from "gsap"; // Also work with TweenLite and TimelineLite: import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, gsap);

export default {
  name: "Home",
  components: {
    ProjectCarousel,
    HomeHero,
    Introduction,
    AboutMe,
    GetInTouch,
  },
  mounted() {
    // change opacity of hero section when scrolling

    // animate about section

    let controller = new ScrollMagic.Controller();
    let timeline = gsap.timeline();
    timeline
      .to(".hero-content", {
        y: "-100%",
        opacity: 0,
        duration: 2,
      })
      .to("#home-hero", { duration: 1, opacity: 0 }, "-=3");

    let scene1 = new ScrollMagic.Scene({
      triggerElement: ".intro-wrapper",
      duration: "100%",
      triggerHook: 1,
    }).setTween(timeline);

    // animate introduction section
    let timeline2 = gsap.timeline();
    timeline2
      .from("#intro-text", { x: -300, opacity: 0, duration: 3 }, 0)
      .from("#intro-img", { x: 300, opacity: 0, duration: 3 }, 0)
      .to("#intro-img", { y: -80, duration: 2 });

    let scene2 = new ScrollMagic.Scene({
      triggerElement: ".intro-wrapper",
      duration: "100%",
      triggerHook: 1,
    }).setTween(timeline2);

    // animate about section

    let timeline3 = gsap.timeline();
    timeline3.from("#button__arrow", { rotate: -90, duration: 0.5 });

    let scene3 = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      duration: 0,
      triggerHook: 0.5,
    }).setTween(timeline3);

    controller.addScene([scene1, scene2, scene3]);
  },
};
</script>

<style lang="less">
.home {
  // cursor: none;
  width: 100%;
  height: 100%;
}
</style>
