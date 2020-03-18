<template>
  <div class="home">
    <HomeHeader id="home-header"></HomeHeader>
    <!-- <AboutMe></AboutMe> -->
    <Introduction></Introduction>
    <project-carousel></project-carousel>
    <div class="clearfix"></div>
    <AboutMe></AboutMe>
  </div>
</template>

<script>
// import VerticalLine from '../components/VerticalLine'
import HomeHeader from "../components/HomeHeader";
// import AboutMe from "../components/AboutMe";
import Introduction from '../components/Introduction'
import ProjectCarousel from "../components/ProjectCarousel";
import AboutMe from "../components/AboutMe";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import gsap from "gsap"; // Also works with TweenLite and TimelineLite: import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, gsap);

export default {
  name: "Home",
  components: {
    ProjectCarousel,
    HomeHeader,
    Introduction,
    AboutMe
  },
  mounted() {
    // change opacity of hero section when scrolling

    // animate about section

    let controller = new ScrollMagic.Controller();
    let timeline = gsap.timeline();
    timeline
    .to('.hero-content', {
      y:'-100%',
      opacity:0,
      duration: 3
    })
    .to('#home-header', {duration:1, opacity:0}, "-=2")

    let scene1= new ScrollMagic.Scene({
      triggerElement: ".intro-wrapper",
      duration: '100%',
      triggerHook: 1
    })
      .setTween(timeline)


// animate introduction section
      let timeline2 = gsap.timeline();
      timeline2
      .from('#intro-text-1', {x:150,opacity:0, duration:3})
      .from('#intro-img-1', {y:0,opacity:0, duration:3}, "-=3")
      .from('#intro-img-2', {x:-100,opacity:0, duration:3}, "-=3")
      .from('#intro-text-2', {x:-100,opacity:0, duration:3}, "-=3")

      let scene2= new ScrollMagic.Scene({
      triggerElement: ".intro-wrapper",
      duration: "100%",
      triggerHook: 1
    })
      .setTween(timeline2)

    // animate about section
    
      let timeline3 = gsap.timeline();
      timeline3
      .from('#button__arrow', {rotate:-90, duration:0.5})
      // .from('#intro-img-1', {y:50,opacity:0, duration:3}, "-=3")
      // .from('#intro-img-2', {x:-100,opacity:0, duration:3}, "-=3")
      // .from('#intro-text-2', {x:-100,opacity:0, duration:3}, "-=3")

      let scene3= new ScrollMagic.Scene({
      triggerElement: ".section-about",
      duration: 0,
      triggerHook: 0.5
    })
      .setTween(timeline3)

      controller.addScene([scene1, scene2, scene3])
  }
};
</script>

<style lang="less">
.home {
  // cursor: none;
  width: 100%;
  height: 100%;
}
</style>
