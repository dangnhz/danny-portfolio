<template>
  <div id="work" class="work-container">
    <div class="work-wrapper container-fluid">
      <PageTitle title="My Work" />
      <div id="work-list" class="work-list">
        <WorkItem
          :project="project"
          v-for="(project, index) in projects"
          :key="project.id"
          :index="index"
        />
      </div>
    </div>
    <VerticalLine></VerticalLine>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle";
import WorkItem from "../components/WorkItem";
import VerticalLine from "../components/VerticalLine";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "work",
  components: {
    VerticalLine,
    PageTitle,
    WorkItem,
  },
  computed: {
    projects() {
      return this.$store.getters.getAllProjects;
    },
  },
  methods: {
    runParallax(element) {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          scroller: ".smooth-container",
          start: "top 70%",
          toggleActions: "play complete none reverse",
          // markers: true,
        },
      });

      timeline
        .fromTo(
          element.querySelector(".work-item-image"),
          {
            clipPath: "inset(100% 0% 0% 0%)",
          },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
          }
        )
        .from(
          element.querySelector(".work-item-content"),
          {
            y: 50,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.8"
        );
    },
  },
  mounted() {
    // parallax effect
    const workList = document.querySelectorAll(".work-item");
    let _self = this
    setTimeout(() => {
      workList.forEach((item) => {
      _self.runParallax(item);
    })
    }, 500)
  },
  watch: {
    projects() {
      const workList = document.querySelectorAll(".work-item");
      workList.forEach((item) => {
        this.runParallax(item);
      });
    },
  },
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.work-container {
  min-height: 100vh;
  width: 80%;
  color: @white;
  position: relative;
  top: 0;
  background: @bg-dark;
  overflow: hidden;
  max-width: 1920px;
  overflow: hidden;
  margin: 0 auto;

  @media @mobile, @large-mobile {
    width: 100%;
  }
  @media @large-desktop {
    width: 70%;
  }

  .work-list {
    margin-top: 10rem;
    @media @mobile, @large-mobile {
      margin-top: 5rem;
    }
  }
}
</style>