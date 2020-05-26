<template>
  <div id="project-footer-navigation">
    <div v-if="prevProject" class="navigation-wrapper previous-project-wrapper">
      <div>
        <v-icon class="arrow-icon" name="arrow-left"></v-icon>
      </div>
      <div @click="goToPrevProject" class="btn-previous-project">
        <h6>Previouse Project</h6>
        <h1>{{prevProject.title}}</h1>
      </div>
    </div>
    <div class="back-to-project-wrapper">
      <router-link :to="{name:'work'}" class="link-to-project">
        <div class="btn-back-to-project">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="276.167px"
            height="276.167px"
            viewBox="0 0 276.167 276.167"
            style="enable-background:new 0 0 276.167 276.167;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M33.144,2.471C15.336,2.471,0.85,16.958,0.85,34.765s14.48,32.293,32.294,32.293s32.294-14.486,32.294-32.293
			S50.951,2.471,33.144,2.471z"
                />
                <path
                  d="M137.663,2.471c-17.807,0-32.294,14.487-32.294,32.294s14.487,32.293,32.294,32.293c17.808,0,32.297-14.486,32.297-32.293
			S155.477,2.471,137.663,2.471z"
                />
                <path
                  d="M243.873,67.059c17.804,0,32.294-14.486,32.294-32.293S261.689,2.471,243.873,2.471s-32.294,14.487-32.294,32.294
			S226.068,67.059,243.873,67.059z"
                />
                <path
                  d="M32.3,170.539c17.807,0,32.297-14.483,32.297-32.293c0-17.811-14.49-32.297-32.297-32.297S0,120.436,0,138.246
			C0,156.056,14.493,170.539,32.3,170.539z"
                />
                <path
                  d="M136.819,170.539c17.804,0,32.294-14.483,32.294-32.293c0-17.811-14.478-32.297-32.294-32.297
			c-17.813,0-32.294,14.486-32.294,32.297C104.525,156.056,119.012,170.539,136.819,170.539z"
                />
                <path
                  d="M243.038,170.539c17.811,0,32.294-14.483,32.294-32.293c0-17.811-14.483-32.297-32.294-32.297
			s-32.306,14.486-32.306,32.297C210.732,156.056,225.222,170.539,243.038,170.539z"
                />
                <path
                  d="M33.039,209.108c-17.807,0-32.3,14.483-32.3,32.294c0,17.804,14.493,32.293,32.3,32.293s32.293-14.482,32.293-32.293
			S50.846,209.108,33.039,209.108z"
                />
                <path
                  d="M137.564,209.108c-17.808,0-32.3,14.483-32.3,32.294c0,17.804,14.487,32.293,32.3,32.293
			c17.804,0,32.293-14.482,32.293-32.293S155.368,209.108,137.564,209.108z"
                />
                <path
                  d="M243.771,209.108c-17.804,0-32.294,14.483-32.294,32.294c0,17.804,14.49,32.293,32.294,32.293
			c17.811,0,32.294-14.482,32.294-32.293S261.575,209.108,243.771,209.108z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
      </router-link>
    </div>
    <div v-if="nextProject" class="navigation-wrapper next-project-wrapper">
      <div @click="goToNextProject" class="btn-next-project">
        <h6>Next Project</h6>
        <h1>{{nextProject.title}}</h1>
      </div>
      <div>
        <v-icon class="arrow-icon" name="arrow-right"></v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-footer-navigation",
  props: ["prevProject", "nextProject", "goToPrevProject", "goToNextProject"]
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";

#project-footer-navigation {
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
  position: relative;

  @media @mobile, @large-mobile {
    height: 70px;
  }

  .navigation-wrapper {
    color: @white;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      h1,
      .arrow-icon {
        color: @text-color;
      }
    }

    @media @mobile, @large-mobile, @tablet {
      &:hover {
        h1,
        .arrow-icon {
          color: @white;
        }
      }
    }

    h6 {
      text-transform: uppercase;
    }

    h1 {
      transition: 0.5s;
      @media @mobile, @large-mobile, @tablet {
        font-size: 1.8rem;
      }
    }

    .arrow-icon {
      transition: 0.5s;
      margin: 0 1rem;
    }
  }

  .back-to-project-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @media @mobile, @large-mobile {
      display: none;
    }
    .btn-back-to-project svg {
      fill: @white;
      width: 2rem;
      transition: 0.5s;
      &:hover {
        transform: scale(1.1);
        fill: @text-color;
      }
    }
  }
  .previous-project-wrapper {
    text-align: left;
    position: absolute;
    left: 5rem;
    &:hover {
      .arrow-icon {
        transform: translateX(-25px);
      }
    }

    @media @mobile, @large-mobile {
      display: none;
    }
    @media @tablet {
      left: 1rem;
    }
    @media @large-desktop {
      left: 10rem;
    }
  }
  .next-project-wrapper {
    text-align: right;
    position: absolute;
    right: 5rem;
    &:hover {
      .arrow-icon {
        transform: translateX(25px);
      }
    }

    @media @mobile, @large-mobile, @tablet {
      right: 1rem;
      &:hover {
        .arrow-icon {
          transform: translateX(0);
        }
      }
    }

    @media @large-desktop {
      right: 10rem;
    }
  }
}
</style>