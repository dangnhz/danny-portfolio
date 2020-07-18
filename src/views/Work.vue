<template>
  <div id="work" class="work-container">
    <PageLoader></PageLoader>
    <div class="work-wrapper container-fluid">
      <div class="page-title col-sm-12 col-md-10 col-lg-8">
        <h1>My Work</h1>
        <span class="line"></span>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-8">
          <div id="work-list" class="work-list">
            <div class="work-item" v-for="(project, index) in projects" :key="project.id">
              <div class="row d-flex">
                <div class="col-md-12 col-lg-12 col-xl-7 col-sm-12 col-xs-12 work-item_bg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801 23">
                    <path
                      fill="#f1f1f1"
                      d="M801 23H0V4c0-2.8 3.3-4 6.1-4H797c2.8 0 4.1 1.2 4.1 4v19z"
                    />
                    <circle opacity=".71" fill="#E74C3C" cx="14.1" cy="11.5" r="4.7" />
                    <circle opacity=".71" fill="#F1C40F" cx="29.5" cy="11.5" r="4.7" />
                    <circle opacity=".71" fill="#2ECC71" cx="44.9" cy="11.5" r="4.7" />
                  </svg>
                  <img
                    class="work-item_bg-image"
                    v-if="project.workImage"
                    :src="project.workImage"
                    alt="project_cover"
                  />
                </div>
                <div class="col-md-12 col-lg-5 col-sm-12 col-xs-12"></div>
              </div>
              <div class="work-item-index" v-if="index < 9">.0{{index + 1}}</div>
              <div class="work-item-index" v-else>.{{index + 1}}</div>
              <div class="work-item_title">
                <p>{{project.category}}</p>
                <h3>{{project.title}}</h3>
                <p
                  class="col-xl-4 col-md-12 col-xs-12 col-sm-12 p-0 project-description"
                >{{project.desc}}</p>
                <div class="project-technology">
                  <span
                    v-for="(item, index) in project.tech"
                    :key="index"
                    class="project-technology-item"
                  >{{ item }}</span>
                </div>
                <a :href="project.url" target="_blank">
                  <button class="flat-btn mt-3">View Project</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VerticalLine></VerticalLine>
  </div>
</template>

<script>
import PageLoader from "../components/PageLoader";
import VerticalLine from "../components/VerticalLine";
import ScrollMagic from "scrollmagic";
import gsap from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, gsap);
export default {
  name: "work",
  components: {
    VerticalLine,
    PageLoader
  },
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.projects = this.$store.getters.getAllProjects;
  },
  mounted() {
    const workList = document.querySelectorAll(".work-item");
    let w = window.innerWidth;
    let tl = gsap.timeline({ paused: true });
    let size = w > 1024 ? "big" : "small";
    if (size === "big") {
      makeScrollMagic();
    }

    function makeScrollMagic() {
      tl.to(".page-title", {
        opacity: 0,
        duration: 1
      }).to(
        ".work-list",
        {
          y: 0,
          duration: 15
        },
        "-=3"
      );

      let controller = new ScrollMagic.Controller();

      let scene1 = new ScrollMagic.Scene({
        triggerElement: "#work",
        duration: "100%",
        triggerHook: 0
      }).setTween(tl);
      controller.addScene(scene1);

      // add parallax for work-item
      workList.forEach(workItem => {
        let projectImage = workItem.querySelector(".work-item_bg");
        let tl2 = gsap.timeline();
        tl2.from(
          projectImage,
          {
            y: 250,
            duration: 1
          },
          0
        );
        let scene2 = new ScrollMagic.Scene({
          triggerElement: workItem,
          duration: "100%",
          triggerHook: 0.7
        }).setTween(tl2);
        controller.addScene(scene2);
      });
    }
  }
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.work-container {
  width: 100%;
  height: 100%;
  color: @white;
  position: relative;
  top: 0;
  background: @bg-dark;
  overflow: hidden;

  .page-title {
    margin: 0 auto;
    padding: 15rem 0 5rem 0;
    @media @mobile, @large-mobile, @tablet {
      padding: 10rem 0 0 0;
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
    .line {
      content: "";
      display: block;
      background: @text-color;
      width: 100px;
      height: 5px;
      margin-top: 4rem;
    }
  }

  .work-list {
    max-width: 1224px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 5;

    .work-item {
      margin: 70px 0;
      padding: 20px 0;
      float: left;
      width: 100%;
      position: relative;

      .project-description {
        font-size: 1rem;

        @media @large-desktop {
          font-size: 1.2rem;
        }
      }

      .project-technology {
        margin: 2rem 0 1rem 0;
        .project-technology-item {
          font-size: 1rem;
          margin-right: 1rem;
          color: rgba(255, 255, 255, 0.5);
        }
      }

      .work-item_bg {
        width: 100%;
        height: auto;
        transition: 0.4s;
        position: relative;
        z-index: 99;
        overflow: hidden;
        padding: 0;
        line-height: 0 !important;
        @media @mobile, @large-mobile {
          margin-bottom: 2.5rem;
          padding: 1rem;
        }
        @media @tablet {
          margin-bottom: 2.5rem;
        }

        &::before {
          position: absolute;
          top: 0;
          left: -75%;
          z-index: 2;
          display: block;
          content: "";
          width: 50%;
          height: 100%;
          background: -webkit-linear-gradient(
            left,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          -webkit-transform: skewX(-25deg);
          transform: skewX(-25deg);
        }
        &:hover {
          &::before {
            -webkit-animation: shine 0.75s;
            animation: shine 0.75s;
          }
          .work-item_bg-image {
            // filter: grayscale(0);
            // -webkit-filter: grayscale(0);
            transform-origin: center center;
            @media @mobile, @large-mobile, @tablet {
              transform: none;
            }
          }
        }
        .work-item_bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          // -webkit-filter: grayscale(80%);
          // filter: grayscale(80%);
          transition: 0.25s;
        }

        @-webkit-keyframes shine {
          100% {
            left: 125%;
          }
        }
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      }

      .work-item-index {
        position: absolute;
        right: 0;
        bottom: 2rem;
        z-index: -1;
        font-size: 74px;
        font-weight: bold;
        line-height: 0;
        color: #414145;
        text-transform: uppercase;
        font-family: "averta", sans-serif;
        @media @desktop, @large-desktop {
          bottom: 10rem;
        }
      }
      .work-item_title {
        position: relative;
        width: fit-content;
        top: -20vw;
        left: 70%;
        color: @white;
        @media @mobile, @large-mobile, @tablet {
          left: 50%;
          transform: translateX(-50%);
          top: 0.5rem;
        }
        h3 {
          font-size: 2rem;
          letter-spacing: 5px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: "averta", sans-serif;
          color: @white;
          @media @mobile, @large-mobile, @tablet {
            font-size: 1rem;
          }
        }
      }

      &:nth-child(2n) {
        .work-item_bg {
          order: 1;
        }
        .work-item-index {
          @media @desktop, @large-desktop {
            left: 0;
          }
          @media @mobile, @large-mobile, @tablet {
            right: 0;
          }
        }
        .work-item_title {
          left: 0;
          @media @mobile, @large-mobile, @tablet {
            left: 50%;
            transform: translateX(-50%);
            top: 0.5rem;
          }
        }
      }
    }
  }
}
</style>