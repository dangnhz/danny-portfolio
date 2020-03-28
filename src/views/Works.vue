<template>
  <div id="works" class="works-container">
    <PageLoader></PageLoader>
    <div class="works-wrapper container-fluid">
      <div id="shadow-title" class="shadow-title">Featured Projects</div>
      <div class="page-title col-sm-12 col-md-10 col-lg-8">
        <h1>My Works.</h1>
        <span class="line"></span>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-8">
          <div id="works-list" class="works-list">
            <div class="work-item" v-for="(project, index) in projects" :key="project.id">
              <div class="row d-flex">
                <div class="col-md-12 col-lg-12 col-xl-7 col-sm-12 col-xs-12 work-item_bg">
                    <div class="bg-overlay">
                        <a :href="project.url" target="_blank">
                          <svg class="icon-earth" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                              <path d="m429.2,82.8c-46.2-46.3-107.8-71.8-173.2-71.8s-127,25.5-173.2,71.8-71.8,107.8-71.8,173.2 25.5,127 71.8,173.2 107.8,71.8 173.2,71.8 127-25.5 173.2-71.8 71.8-107.8 71.8-173.2-25.5-127-71.8-173.2zm49.6,162.2h-95c-0.9-37.8-6.2-74.2-15.5-106.5 18.1-9.3 35-21 50.5-34.8 35,37.4 57.3,86.8 60,141.3zm-211.8,22h94.9c-0.8,34.8-5.6,68.1-13.9,97.9-25.6-10.3-52.9-16.3-81-17.6v-80.3zm136-178.6c-12.8,11.3-26.8,20.9-41.6,28.9-3.8-10.6-8.1-20.6-12.9-30-9.5-18.8-20.3-34.2-32.2-46 32.5,9.1 62,25.4 86.7,47.1zm-136-52c22.9,5.1 44.5,26.2 61.9,60.6 4.7,9.3 8.9,19.2 12.6,29.7-23.5,9.7-48.6,15.4-74.5,16.7v-107zm81.1,111.4c8.2,29.6 12.9,62.7 13.7,97.3h-94.8v-79.6c28.2-1.3 55.5-7.4 81.1-17.7zm-103.1,97.2h-94.9c0.8-34.6 5.5-67.7 13.7-97.3 25.6,10.4 53,16.4 81.1,17.6v79.7zm.1-208.6v107c-25.9-1.3-51.1-7-74.5-16.7 3.7-10.5 7.9-20.4 12.6-29.7 17.4-34.4 39-55.5 61.9-60.6zm-49.3,4.9c-11.9,11.8-22.7,27.3-32.2,46-4.7,9.4-9,19.4-12.9,30-14.8-8-28.7-17.6-41.6-28.9 24.7-21.7 54.2-38 86.7-47.1zm-102.5,62.4c15.5,13.8 32.4,25.4 50.5,34.8-9.3,32.4-14.7,68.7-15.5,106.5h-95c2.7-54.5 25-103.9 60-141.3zm-60,163.3h95c0.9,38.1 6.3,74.6 15.7,107.1-18,9.3-34.9,20.8-50.3,34.6-35.3-37.5-57.7-87-60.4-141.7zm76.2,157c12.8-11.2 26.7-20.8 41.4-28.7 3.8,10.3 8,20.2 12.7,29.4 9.5,18.8 20.3,34.2 32.2,46.1-32.3-9.1-61.7-25.3-86.3-46.8zm135.6,51.6c-22.9-5.1-44.5-26.2-61.9-60.6-4.6-9.1-8.7-18.8-12.4-29.1 23.4-9.7 48.5-15.4 74.3-16.6v106.3zm-81-110.7c-8.3-29.8-13.1-63.1-13.9-97.9h94.9v80.3c-28.1,1.2-55.4,7.2-81,17.6zm103,110.7v-106.3c25.8,1.3 50.9,6.9 74.3,16.6-3.7,10.3-7.8,20-12.4,29.1-17.4,34.4-39,55.5-61.9,60.6zm49.3-4.9c11.9-11.8 22.7-27.3 32.2-46.1 4.7-9.2 8.9-19.1 12.7-29.4 14.7,7.9 28.6,17.5 41.4,28.7-24.6,21.6-54,37.8-86.3,46.8zm102.2-62c-15.4-13.7-32.3-25.3-50.3-34.6 9.4-32.5 14.8-69.1 15.7-107.1h95c-2.8,54.7-25.2,104.2-60.4,141.7z"/>
                            </g>
                          </svg>
                        </a>
                    </div>
                    <a :href="project.url" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801 23"><path fill="#f1f1f1" d="M801 23H0V4c0-2.8 3.3-4 6.1-4H797c2.8 0 4.1 1.2 4.1 4v19z"></path><circle opacity=".71" fill="#E74C3C" cx="14.1" cy="11.5" r="4.7"></circle><circle opacity=".71" fill="#F1C40F" cx="29.5" cy="11.5" r="4.7"></circle><circle opacity=".71" fill="#2ECC71" cx="44.9" cy="11.5" r="4.7"></circle></svg>
                      <img class="work-item_bg-image" v-if="project.workImage" :src="project.workImage" alt="project_cover" />
                    </a>
                </div>
                <div class="col-md-12 col-lg-5 col-sm-12 col-xs-12"></div>
              </div>
              <div class="work-item-index" v-if="index < 9">.0{{index + 1}}</div>
              <div class="work-item-index" v-else>.{{index + 1}}</div>
              <router-link
                :to="{name:'project', params:{project_name:project.name}}"
                class="work-item_title"
              >
                <p>{{project.category}}</p>
                <h3>{{project.title}}</h3>
                <p class="col-4 p-0">{{project.desc}}</p>
                <button class="flat-btn mt-3">View Project</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VerticalLine></VerticalLine>
  </div>
</template>

<script>
import PageLoader from '../components/PageLoader'
import VerticalLine from "../components/VerticalLine"
import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, gsap);
export default {
  name: "works",
  components: {
    VerticalLine,
    PageLoader
  },
  data() {
    return {
      projects: []
    };
  },
  created () {
    this.projects = this.$store.getters.getAllProjects;
  },
  mounted () {

    const workList = document.querySelectorAll('.work-item')
    let w = window.innerWidth
    let tl = gsap.timeline({paused: true})
    let size = w > 1024 ? 'big' : 'small'
    if (size === 'big') {
      makeScrollMagic()
    }

    function makeScrollMagic() {
    tl.to('.page-title', {
      opacity:0,
      duration: 1
    })
    .to('.works-list', {
      y:-400,
      duration: 15,
    }, "-=3")

    let controller = new ScrollMagic.Controller()

    let scene1 = new ScrollMagic.Scene({
      triggerElement: '#works',
      duration: '100%',
      triggerHook: 0
    })
    .setTween(tl)
    controller.addScene(scene1)

    // add parallax for work-item
    workList.forEach(workItem => {
      let projectImage = workItem.querySelector('.work-item_bg')
      let tl2 = gsap.timeline()
      tl2.from(projectImage, {
        y: 250,
        duration: 1,
      },0)
      let scene2 = new ScrollMagic.Scene({
        triggerElement: workItem,
        duration: '100%',
        triggerHook: 0.7
      })
      .setTween(tl2)
      controller.addScene(scene2)

    })
    }
  }
  
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.works-container {
  width: 100%;
  height: 100%;
  color: @white;
  position: relative;
  top: 0;
  background: @bg-dark;
  overflow: hidden;

  .shadow-title {
    pointer-events: none;
    position: absolute;
    display: none;
    margin-top: 20%;
    left: 20px;
    width: 200%;
    text-align: left;
    font-family: sans-serif;
    font-weight: 900;
    font-size: 15rem;
    line-height: 1;
    color: rgba(0, 0, 0, 0.1);
    font-weight: 900;
    z-index: 1;
    @media @mobile, @large-mobile, @tablet {
      display: none;
    }
  }
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
      font-family: "Abril-Fatface";
      font-weight: 900;
      line-height: 1;
      z-index: 2;
      @media @mobile, @large-mobile, @tablet {
        font-size: 3rem;
      }
    }
    .line {
      content:'';
      display: block;
      background: @text-color;
      width: 100px;
      height: 5px;
      margin-top: 4rem;
    }
  }

  .works-list {
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
      

      .work-item_bg {
        width: 100%;
        height: auto;
        transition: 0.5s;
        position: relative;
        z-index: 99;
        overflow: hidden;
        padding: 0;
        line-height: 0 !important;
        @media @mobile, @large-mobile {
          margin-bottom: 2.5rem;
          padding:1rem;
        }
        @media @tablet {
          margin-bottom: 2.5rem;
        }
        &:hover {
          .bg-overlay {
            opacity: 1;
          }
          .work-item_bg-image{
            transform: scale(1);
            transform-origin: center center;
            @media @mobile, @large-mobile, @tablet {
               transform: none;
            }
          }
          
        }
          .bg-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            transition: 0.5s;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(31,32,41,.7);
            a {
              padding: 2rem;
              width: 100px;
              height: 100px;
              transition: 0.5s;
              border: 1px solid @text-color;
              transform: rotate(45deg);
              &:hover {
                background: @text-color;
              }
              .icon-earth {
                fill: @white;
                transform: rotate(-45deg);
            }
            }
          }
         .work-item_bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.3s;
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
        font-family: "Poppins", sans-serif;
      }
      .work-item_title {
        position: relative;
        width: fit-content;
        top: -20vw;
        left: 70%;
        color: @white;
        @media @mobile, @large-mobile, @tablet {
          left: 0;
          top: 0.5rem;
          text-align: center;
          .flat-btn,
          p {
            display: none;
          }
        }
        h3 {
          font-size: 2rem;
          letter-spacing: 5px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: "Lato";
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
          left: 0;
        }
        .work-item_title {
          left: 0;
        }
      }
    }
  }
}
</style>