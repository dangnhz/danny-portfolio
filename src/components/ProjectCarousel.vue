<template>
  <section class="pr_carousel" data-aos="fade-up">
    <div class="pr_carousel-wrapper">
      <div class="pr_carousel-title">
        <div class="pr-carousel-title-item">
          <h3>Selected work</h3>
          <p>Some cool projects made by me.</p>
          <router-link :to="{name:'work'}">
            <button class="flat-btn">My Portfolio</button>
          </router-link>
        </div>
      </div>
      <div class="slider-carousel-wrap">
        <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
          <div v-for="project in projects" :key="project.id">
            <a :href="project.url" target="_blank">
              <div class="project-image">
                <img v-if="project.coverImage" :src="project.coverImage" :alt="project.title" />
              </div>

              <div class="project-text">
                <h3 class="project-title">{{project.title}}</h3>

                <p class="project-tech-stack">
                  <span class="project-tech-item">{{project.tech[0]}}</span>
                  <span class="project-tech-item">{{project.tech[1]}}</span>
                </p>
              </div>
            </a>
          </div>
        </slick>
        <div class="btn-prev hoverable">
          <v-icon name="arrow-left"></v-icon>
        </div>
        <div class="btn-next hoverable">
          <v-icon name="arrow-right"></v-icon>
        </div>
      </div>
      <div class="pr-carousel-counter">{{currentSlide}}/{{projects.length}}</div>
    </div>
  </section>
</template>

<script>
import Slick from "vue-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
export default {
  name: "project-carousel",
  components: {
    Slick,
  },
  data() {
    return {
      projects: [],
      slickOptions: {
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        centerPadding: "0px",
        nextArrow: ".btn-next",
        prevArrow: ".btn-prev",
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
      currentSlide: 1,
    };
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide + 1;
    },
  },
  created() {
    this.projects = this.$store.getters.getAllProjects;
  },
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.pr_carousel {
  width: 100%;
  height: auto;
  background: @bg-dark-2;
  text-align: center;

  .pr_carousel-wrapper {
    position: relative;
    width: 100%;
    padding: 110px 0;
    overflow: hidden;
    max-width: 1920px;
    margin: 0 auto;
    @media @mobile, @large-mobile, @tablet {
      padding: 70px 0;
    }

    .pr_carousel-title {
      position: absolute;
      left: 100px;
      width: 50%;
      z-index: 11;
      top: 30%;
      text-align: left;
      @media @mobile, @large-mobile, @tablet {
        position: relative;
        float: left;
        width: 100%;
        margin-bottom: 50px;
        left: 0;
      }

      .pr-carousel-title-item {
        max-width: 500px;
        margin: 0 auto;
        @media @mobile, @large-mobile, @tablet {
          max-width: 92%;
        }
      }

      .pr-carousel-title-item h3 {
        font-size: 3rem;
        font-family: "averta", sans-serif;
        font-weight: 900;
        color: @white;
        position: relative;
        text-align: left;
        padding-bottom: 20px;
        @media @mobile, @large-mobile, @tablet {
          font-size: 2rem;
        }
      }

      .pr-carousel-title-item p {
        box-sizing: border-box;
        border: none;
        outline: 0;
        font-style: inherit;
        vertical-align: baseline;
        text-decoration: none;
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        line-height: 24px;
        // padding-bottom: 10px;
        font-weight: 500;
        font-family: "averta", sans-serif;
        color: @white;
        text-align: left;
      }
    }

    .slider-carousel-wrap {
      margin: 0;
      padding: 0;
      float: left;
      width: 100%;
      position: relative;
      z-index: 10;

      .slick-slider {
        margin: 0;
        padding: 0;
        display: block;
        box-sizing: border-box;
        user-select: none;
        position: relative;
        z-index: 2;

        .slick-list {
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          box-sizing: border-box;
          position: relative;
          margin: 0;
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          padding: 0px;

          .slick-track {
            padding: 0;
            position: relative;
            opacity: 1;
            overflow: hidden;
            margin-bottom: 2rem;

            .slick-slide {
              user-select: none;
              height: 100%;
              min-height: 1px;
              display: block;
              opacity: 0.3;
              transform: scale(0.8);
              padding: 0 20px;
              margin: 0;
              transition: all 400ms linear;

              .project-image {
                width: 100%;
                height: 25rem;
                @media @desktop {
                  height: 20rem;
                }
                @media @large-desktop {
                  height: 30rem;
                }
                img {
                  width: 100%;
                  height: 100%;
                  vertical-align: middle;
                  object-fit: cover;
                }
              }

              .project-text {
                background: rgba(255, 255, 255, 0.1);
                padding: 32px 30px 48px 30px;
                position: relative;
                z-index: 1;
                clip-path: inset(0% 0% 100% 0%);
                transition: all 0.5s ease;
                @media @mobile, @large-mobile, @tablet {
                  //   padding: 16px 15px 30px 15px;
                }
                &:hover {
                  .project-title {
                    padding-left: 60px;
                  }
                  .project-title:before {
                    width: 35px;
                  }
                }

                .project-title {
                  text-align: left;
                  position: relative;
                  color: @white;
                  font-size: 0.8rem;
                  font-family: "averta", sans-serif;
                  text-transform: uppercase;
                  font-weight: 500;
                  letter-spacing: 2px;
                  padding-left: 35px;
                  transition: all 200ms linear;
                  &:before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 20px;
                    height: 1px;
                    background: @text-color;
                    transition: all 200ms linear;
                  }
                }

                .project-tech-stack {
                  margin-top: 10px;
                  padding-left: 35px;
                  float: left;
                  color: rgba(255, 255, 255, 0.5);
                  font-size: 13px;

                  span {
                    margin-right: 1rem;
                  }
                }
              }
            }

            .slick-current {
              opacity: 1;
              -webkit-transform: scale(1);
              -moz-transform: scale(1);
              transform: scale(1);
            }
            .slick-current .project-text {
              clip-path: inset(0% 0% 0% 0%);
            }
          }
        }

        .slick-dots {
          position: absolute;
          z-index: 10;
          width: 50%;
          bottom: -68px;
          right: 0;
          text-align: left;
          padding-left: 20px;
          @media @mobile, @large-mobile, @tablet {
            bottom: -28px;
            padding-left: 0px;
          }

          li button:before {
            font-size: 0.3rem;
            opacity: 0.5;
            color: @white;
            transition: all 0.4s;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          li.slick-active button:before {
            font-size: 0.5rem;
            opacity: 1;
            color: @text-color;
          }
        }
      }

      .btn-next,
      .btn-prev {
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid @white;
        z-index: 30;
        transition: all 0.5s;
        // transform-origin: 50% 100%;
        border-radius: 50%;
        color: @text-color;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background: @text-color;
          color: @white;
          // transform: scale(1.5);
          cursor: pointer;
        }
      }
      .btn-next {
        right: 20px;
      }
      .btn-prev {
        left: 20px;
      }
    }
    .pr-carousel-counter {
      position: absolute;
      right: 50%;
      z-index: 50;
      bottom: 46px;
      color: @white;
      margin-right: 80px;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.71);
      font-weight: 500;
      font-family: "averta", sans-serif;
      letter-spacing: 4px;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        right: -50px;
        width: 30px;
        height: 1px;
        background: @text-color;
      }
    }
  }
}
</style>