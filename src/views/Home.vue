<template>
  <div class="home">
    <HomeHero></HomeHero>
    <Introduction></Introduction>
    <div class="clearfix"></div>
    <ProjectCarousel></ProjectCarousel>
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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    setTimeout(this.homepageAnimation, 500)
  },
  methods: {
    homepageAnimation() {
        // animate intro section
    let introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduction",
        start: "top 70%",
        end: "+=100%",
        scroller: ".smooth-container",
        // scrub: 0.5,
        toggleActions: "play complete none reverse",
        // markers: true,
      },
    });

    introTimeline.fromTo(
      "#intro-img",
      {
        opacity: 0,
        y: 150,
      },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
      }
    );

    //animate project carousel section

    // animate abnout section

    let aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-about",
        start: "top 50%",
        end: "+=100%",
        scroller: ".smooth-container",
        // scrub: 0.5,
        toggleActions: "play complete none reverse",
        // markers: true,
      },
    });
    aboutTimeline.from("#icon__arrow", {
      rotate: -90,
      duration: 0.5,
    });

    const slideUpElements = document.querySelectorAll(".animated-slideUp");

    slideUpElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "+=100%",
          scroller: ".smooth-container",
          toggleActions: "play complete none reverse",
        },
        opacity: 0,
        yPercent: 100,
        duration: 0.6,
      });
    });

    // animate  the skills graph

    let graphTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#skill-graph",
        start: "top 70%",
        scroller: ".smooth-container",
        toggleActions: "play complete none reverse",
        // markers: true,
      },
    });

    graphTimeline
      .from(".skill_tri_body", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.5,
        stagger: 0.1,
      })
      .from(".percent_line_dash", {
        attr: {
          x2: 0,
        },
        duration: 0.5,
      })
      .from(".text-skill-fadeIn", {
        opacity: 0,
        duration: 0.3,
      });

    //animated grid-skills

    let gridSkillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-skill",
        start: "top 80%",
        scroller: ".smooth-container",
        toggleActions: "play complete none reverse",
        // markers: true,
      },
    });

    gridSkillsTimeline.from(".grid-skill ul li", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      // stagger: 0.1,
    });
    }
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
