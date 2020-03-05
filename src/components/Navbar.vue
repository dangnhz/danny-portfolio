<template>
  <div id="nav-bar" class="nav-bar">
    <div class="columns is-3 is-mobile">
      <div class="column btn-menu ">
        <span id="hamburger-icon" class=" hamburger-icon magnetic-button hoverable" @click="toggleMenu">
          <div class="hamburger-el"></div>
          <div class="hamburger-el"></div>
        </span>
        <span @click="toggleMenu" class="hamburger-caption hoverable">{{hamburgerCaption}}</span>
      </div>
      <div class="column logo-wrapper">second</div>
      <div class="column view-projects">last</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
      return {
          hamburgerCaption: 'Menu',
      }
  },
  methods: {
      toggleMenu () {
          const hamburger = document.querySelector('#hamburger-icon');
          if (this.$store.state.showMenu == false) {
            this.hamburgerCaption = 'Close';
            hamburger.classList.add("close-menu");
            this.$store.dispatch('TOGGLE_MENU');
          } else {
              this.hamburgerCaption = 'Menu';
                hamburger.classList.remove("close-menu");
                this.$store.dispatch('TOGGLE_MENU');
          }
      }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.nav-bar {
  padding: 5rem 2rem;
  width: 100%;
  // background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.btn-menu {
  width: 50px;
  overflow: hidden;
  position: relative;
  color: @text-color;
  left: 5rem;
  cursor: pointer;

  .hamburger-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    .hamburger-el {
      content: "";
      background: @text-color;
      margin: 5px;
      display: block;
      width: 25px;
      height: 2px;
      transition: 0.3s ease;

      &:nth-child(2) {
         animation: menuIcon 5s ease 2s infinite;
         @keyframes menuIcon{
             30%{
                 transform: scaleX(.4);
                 transform-origin:left center;
                 }
         40%{
             transform-origin:right center;
             }
        60%,80%{transform: scaleX(1);
        transform-origin:right center}
        }
      }
    }
  }

  .hamburger-icon.close-menu {
      .hamburger-el {
          transition: 0.3s ease;
          &:nth-child(1) {
              transform: rotate(45deg) translate(0px, 5px);
              animation: none;
          }
          &:nth-child(2) {
              transform: rotate(-45deg) translate(0px, -5px);
              animation: none;
          }
      }
  }
  .hamburger-caption {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    color: @white;
    font-size: 0.875rem;
    letter-spacing: 0.01em;
    &:after {
        position: absolute;
        content: "";
        left: 0px;
        bottom: -0.5em;
        height: 1px;
        background: #fff;
        transition: width 0.5s ease;

    }
    &:hover {
        &:after {
        height: 1px;
        animation: buttonHover 0.8s ease;

        @keyframes buttonHover {
            0% {
                transform: scale(0);
            }
            100% {
                 transform: scale(1);
                right: 0px;
            }
        }
    }
    }
  }
}
</style>