<template>
  <div id="works" class="works-container">
    <div class="works-wrapper container-fluid">
      <div id="shadow-title" class="shadow-title">My Work</div>
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
                  <router-link :to="{name:'project', params:{project_name: project.name}}">
                    <img class="work-item_bg-image" :src="project.imgCover" alt="project_cover" />
                  </router-link>
                </div>
                <div class="col-md-12 col-lg-5 col-sm-12 col-xs-12"></div>
              </div>
              <div class="work-item-index" v-if="index < 9">.0{{index + 1}}</div>
              <div class="work-item-index" v-else>.{{index + 1}}</div>
              <router-link
                :to="{name:'project', params:{project_name: project.name}}"
                class="work-item_title"
              >
                <p>{{project.category}}</p>
                <h3>{{project.title}}</h3>
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
import VerticalLine from "../components/VerticalLine";
import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, gsap);
export default {
  name: "works",
  components: {
    VerticalLine
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
      let projectImage = workItem.querySelector('.work-item_bg-image')
      let tl2 = gsap.timeline()
      tl2.from(projectImage, {
        y: 350,
        duration: 4,
      })
      let scene2 = new ScrollMagic.Scene({
        triggerElement: workItem,
        duration: 700,
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
    position: fixed;
    display: none;
    margin-top: 8rem;
    left: 20px;
    width: 100%;
    height: 300%;
    text-align: left;
    font-family: sans-serif;
    font-weight: 900;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    font-size: 15rem;
    line-height: 1;
    color: rgba(200, 200, 200, 0.1);
    background: linear-gradient(
      90deg,
      rgba(200, 200, 200, 0),
      rgba(200, 200, 200, 0.65)
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
        max-height: 400px;
        transition: 0.5s;
        @media @mobile, @large-mobile {
          height: 150px;
          margin-bottom: 2.5rem;
        }
        @media @tablet {
          height: 340px;
          margin-bottom: 2.5rem;
        }
        @media @large-desktop {
          height: 400px;
        }
        img {
          width: 100%;
          height: 100%;
          position: relative;
          object-fit: cover;
          z-index: 4;
          transform: translateZ(0);
          transition: 0.5s;
          box-shadow: 2px 3px 32px 0 rgba(0, 0, 0, 0.22);
          
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
        width: 100px;
        top: -18rem;
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
          letter-spacing: 10px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: "Lato-Black";
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