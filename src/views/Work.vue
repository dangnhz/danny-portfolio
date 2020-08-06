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
  methods: {},
  updated() {
    const workList = document.querySelectorAll(".work-item");
  },

  mounted() {
    // parallax effect
    const workList = document.querySelectorAll(".work-item");
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