<template>
  <div id="project-container" class="project-container">
    <div class="project-wrapper" v-if="currentProject">
      <div class="page-title col-sm-12 col-md-10 col-lg-8">
        <h1>{{currentProject.title}}</h1>
        <div class="d-flex align-items-center mt-5">
          <div class="line"></div>
        </div>
      </div>

      <div class="project-content col-sm-12 col-md-10 col-lg-8">
        <div class="row mt-5">
          <div class="project-cover-image col-md-7 col-lg-7 col-sm-12 col-xs-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801 23">
              <path fill="#f1f1f1" d="M801 23H0V4c0-2.8 3.3-4 6.1-4H797c2.8 0 4.1 1.2 4.1 4v19z" />
              <circle opacity=".71" fill="#E74C3C" cx="14.1" cy="11.5" r="4.7" />
              <circle opacity=".71" fill="#F1C40F" cx="29.5" cy="11.5" r="4.7" />
              <circle opacity=".71" fill="#2ECC71" cx="44.9" cy="11.5" r="4.7" />
            </svg>
            <img
              v-if="currentProject.workImageURL"
              :src="currentProject.workImageURL"
              alt="project-cover"
            />
          </div>
          <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
            <div class="about-project">
              <h3 class="mb-3">About this project</h3>
              <p v-html="currentProject.description"></p>
              <a :href="currentProject.siteURL" target="_blank" class="flat-btn mt-4">SEE THE SITE</a>
            </div>
          </div>
        </div>
      </div>

      <ProjectFooterNavigation
        :prevProject="prevProject"
        :goToPrevProject="goToPrevProject"
        :goToNextProject="goToNextProject"
        :nextProject="nextProject"
      ></ProjectFooterNavigation>
    </div>
  </div>
</template>

<script>
import ProjectFooterNavigation from "../components/ProjectFooterNavigation";
import gsap from "gsap";
export default {
  name: "project",
  components: {
    ProjectFooterNavigation,
  },
  computed: {
    allProjects() {
      return this.$store.getters.getAllProjects;
    },
    currentProject() {
      let project_name = this.$route.params.project_name;
      let currentProject = this.$store.getters.getSingleProject(project_name);

      return currentProject;
    },
    currentProjectIndex() {
      let currentIndex = this.allProjects.indexOf(this.currentProject);
      return currentIndex;
    },
    prevProject() {
      if (this.currentProjectIndex === 0)
        return this.allProjects[this.allProjects.length - 1];
      return this.allProjects[this.currentProjectIndex - 1];
    },
    nextProject() {
      if (this.currentProjectIndex === this.allProjects.length - 1)
        return this.allProjects[0];
      return this.allProjects[this.currentProjectIndex + 1];
    },
  },
  methods: {
    goToNextProject() {
      gsap.to(".project-container", { opacity: 0, duration: 0.8 });
      setTimeout(() => {
        this.$router.push({
          name: "project",
          params: { project_name: this.nextProject.slug },
        });
      }, 800);
    },
    goToPrevProject() {
      gsap.to(".project-container", { opacity: 0, duration: 0.8 });
      setTimeout(() => {
        this.$router.push({
          name: "project",
          params: { project_name: this.prevProject.name },
        });
      }, 800);
    },
  },
  watch: {
    currentProject() {
      gsap.to(".project-container", { opacity: 1, duration: 0.8, delay: 0.8 });
    },
  },
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.project-container {
  width: 100%;
  min-height: 100vh;
  color: @white;
  position: relative;
  top: 0;
  margin-bottom: 5rem;
  background: @bg-dark;
  overflow: hidden;

  .page-title {
    margin: 0 auto;
    padding: 15rem 0 5rem 0;
    @media @mobile, @large-mobile, @tablet {
      padding: 10rem 0 0 1rem;
    }

    h1 {
      position: relative;
      font-size: 5rem;
      color: @white;
      font-family: "averta", sans-serif;
      font-weight: 900;
      line-height: 1;
      z-index: 2;
      @media @mobile, @large-mobile, @tablet {
        font-size: 3rem;
      }
    }
    .project-category {
      font-size: 1.5rem;
      @media @mobile, @large-mobile, @tablet {
        font-size: 1rem;
      }
    }
    .line {
      content: "";
      display: inline-block;
      background: @text-color;
      width: 50px;
      height: 5px;
    }
  }
  .project-content {
    margin: 5rem auto;
    .about-project {
      margin-top: 3rem;
      padding-left: 3rem;
      @media @mobile, @large-mobile {
        padding-left: 0;
      }
    }

    .project-cover-image {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding: 0;
      line-height: 0 !important;
      @media @mobile, @large-mobile, @tablet {
        padding: 1rem;
      }
      // @media @large-desktop {
      //     height: 50vw;
      // }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
      }
    }
  }
}
</style>