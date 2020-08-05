<template>
  <div class="work-item">
    <div class="work-item-wrapper">
      <div class="work-item-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801 23">
          <path fill="#f1f1f1" d="M801 23H0V4c0-2.8 3.3-4 6.1-4H797c2.8 0 4.1 1.2 4.1 4v19z" />
          <circle opacity=".71" fill="#E74C3C" cx="14.1" cy="11.5" r="4.7" />
          <circle opacity=".71" fill="#F1C40F" cx="29.5" cy="11.5" r="4.7" />
          <circle opacity=".71" fill="#2ECC71" cx="44.9" cy="11.5" r="4.7" />
        </svg>
        <img
          class="work-item-cover-image"
          v-if="project.workImageURL"
          :src="project.workImageURL"
          alt="project_cover"
        />
      </div>
      <div class="work-item-content">
        <div class="work-item-content-wrapper">
          <!-- <p class="work-item-category">{{project.category}}</p> -->
          <h3 class="work-item-title">{{project.title}}</h3>
          <p class="work-item-description">{{project.description}}</p>
          <div class="work-item-technology">
            <span
              v-for="(item, index) in project.technologies"
              :key="index"
              class="project-technology-item"
            >{{ item }}</span>
          </div>
          <a :href="project.siteURL" target="_blank">
            <button class="flat-btn mt-3">View Project</button>
          </a>
        </div>
      </div>
    </div>
    <div class="work-item-index">
      <div v-if="index < 9">.0{{index + 1}}</div>
      <div v-else>.{{index + 1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-item",
  props: {
    project: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";

.work-item {
  position: relative;
  .work-item-wrapper {
    margin: 5rem 0 15rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media @mobile, @large-mobile, @tablet {
      flex-direction: column;
      margin-bottom: 5rem;
    }

    .work-item-image {
      width: 55%;
      transition: 0.4s;
      position: relative;
      z-index: 99;
      overflow: hidden;
      padding: 0;
      line-height: 0 !important;

      @media @desktop {
        max-height: 350px;
      }

      @media @large-desktop {
        max-height: 700px;
      }

      &:hover {
        .work-item-cover-image {
          transform: scale(1.05);
        }
      }

      @media @mobile, @large-mobile, @tablet {
        width: 100%;
      }

      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
      }

      img {
        transition: 0.5s;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 8;
      }
    }

    .work-item-content {
      height: 100%;
      position: relative;
      width: 40%;
      @media @mobile, @large-mobile, @tablet {
        padding: 0;
        margin-top: 1rem;
        width: 100%;
      }

      @media @tablet {
        padding: 0rem;
        margin-top: 1rem;
      }

      .work-item-content-wrapper {
        margin: 5rem 0;
        @media @mobile, @large-mobile, @tablet {
          margin: 1rem 0;
        }

        .work-item-title {
          font-size: 3rem;
          font-weight: bold;

          @media @mobile, @large-mobile {
            font-size: 1.5rem;
          }
        }

        .work-item-description {
          font-size: 1rem;
          margin: 1.5rem 0;
          @media @mobile, @large-mobile {
            font-size: 1rem;
          }
          @media @large-desktop {
            font-size: 1.2rem;
          }
        }

        .work-item-technology {
          margin-bottom: 1rem;
          .project-technology-item {
            margin-right: 1rem;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }

  //style for project index number

  .work-item-index div {
    font-size: 5rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.1);
    position: absolute;
    right: 0;
    bottom: -8rem;
    @media @mobile, @large-mobile, @tablet {
      bottom: -1rem;
      font-size: 2rem;
    }
  }
}
// style for even work-item element

.work-item:nth-last-of-type(even) {
  //   change the order of image

  .work-item-image {
    order: 1;
    @media @mobile, @large-mobile, @tablet {
      order: 0;
    }
  }

  .work-item-content {
    text-align: left;
  }

  .work-item-index div {
    @media @desktop, @large-desktop {
      left: 0;
    }
  }
}
</style>