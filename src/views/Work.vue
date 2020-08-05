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
import ScrollMagic from "scrollmagic";
import gsap from "gsap";
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
    makeScrollMagic(workList) {
      let tl = gsap.timeline({ paused: true });
      tl.to(".page-title", {
        opacity: 0,
        duration: 1,
      }).to(
        ".work-list",
        {
          y: 0,
          duration: 15,
        },
        "-=3"
      );

      let controller = new ScrollMagic.Controller();

      let scene1 = new ScrollMagic.Scene({
        triggerElement: "#work",
        duration: "100%",
        triggerHook: 0,
      }).setTween(tl);
      controller.addScene(scene1);

      // add parallax for work-item
      workList.forEach((workItem) => {
        let projectImage = workItem.querySelector(".work-item-image");
        let tl2 = gsap.timeline();
        tl2.from(
          projectImage,
          {
            y: 250,
            duration: 1,
          },
          0
        );
        let scene2 = new ScrollMagic.Scene({
          triggerElement: workItem,
          duration: "100%",
          triggerHook: 0.7,
        }).setTween(tl2);
        controller.addScene(scene2);
      });
    },
  },
  updated() {
    const workList = document.querySelectorAll(".work-item");
    this.makeScrollMagic(workList);
  },

  mounted() {
    // parallax effect
    const workList = document.querySelectorAll(".work-item");
    let w = window.innerWidth;

    if (w > 1024) {
      this.makeScrollMagic(workList);
    }
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
}
</style>