<template>
    <div id="project-container" class="project-container">
        <div class="project-wrapper" v-if="project">
            <div id="project-shadow-title" class="shadow-title">{{project.title}}</div>

            <div class="page-title col-sm-12 col-md-10 col-lg-7">
                <h1>{{project.title}}</h1>
                <div class="d-flex align-items-center mt-5">
                    <div class="line"></div>
                    <div class="project-category ml-5">{{project.category}}</div>
                </div>
            </div>

            <div class="project-content col-sm-12 col-md-10 col-lg-7">
                <div class="row mt-5">
                    <div class="project-cover-image col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <img :src="project.imgCover" alt="project-cover">
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div class="about-project">
                            <h5 class="mb-3">About this project</h5>
                            <p v-html="project.desc"></p>
                            <a href="#" class="flat-btn mt-4">SEE THE SITE</a>
                        </div>
                    </div>
                </div>
                <div style="height: 200vh" class="row mt-5">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';

    export default {
        name:'project',
        data() {
            return {
                project: null
            }
        },
        created () {
            const project_name = this.$route.params.project_name
            this.project = this.$store.getters.getSingleProject(project_name)
            if (!this.project) this.$router.push({name:'works'}) 
        },
        mounted () {
            let timeline = gsap.timeline()
            timeline.to('#project-shadow-title', {
                y:-600,
                duration:10
            })

            let controller = new ScrollMagic.Controller()
            let scene = new ScrollMagic.Scene({
                triggerElement: '#project-container',
                duration: '200%',
                triggerHook: 0
            })
            .setTween(timeline)
            controller.addScene(scene)
        },
    }
</script>

<style lang="less">
@import "../assets/style/setting.less";
.project-container {
  width: 100%;
  min-height: 100vh;
  color: @white;
  position: relative;
  top: 0;
  background: @bg-dark;
  overflow: hidden;

  .shadow-title {
    pointer-events: none;
    position: fixed;
    display: block;
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
      padding: 10rem 0 0 1rem;
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
    .project-category {
        font-size: 1.5rem;
        @media @mobile, @large-mobile, @tablet {
        font-size: 1rem;
      }
    }
    .line {
      content:'';
      display: inline-block;
      background: @text-color;
      width: 50px;
      height: 5px;
    }
  }
    .project-content {
        margin: 5rem auto;
        .about-project {
            margin-top: 5rem;
            padding-left: 3rem;
            @media @mobile, @large-mobile {
            padding-left: 0;
        }
        }
        
        .project-cover-image {
            width: 100%;
            max-height: 400px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
 
}
</style>