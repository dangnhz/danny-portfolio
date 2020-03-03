<template>
  <div ref="navMenu" id="menu-wrapper" class="menu-wrapper">
    <div class="menu-container columns">
      <div class="menu-list column">
        <ul>
          <li>
            <router-link class="menu-item" :to="{name:'home'}">Home</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link class="menu-item" :to="{name:'about'}">About</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link class="menu-item" :to="{name:'works'}">Works</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link class="menu-item" :to="{name:'contact'}">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="more-info column menu-item">More</div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "nav-menu",
computed: {
    showMenu() {
        return this.$store.state.showMenu
    }
},
  methods: {
    toggleMenu() {
      const navMenu = document.querySelector("#menu-wrapper");
      const menuItems = document.querySelectorAll(".menu-item");
      if (this.showMenu == true) {
        gsap.fromTo(navMenu, {
          yPercent: -100,
          opacity: 1,
        }, 
        {
            yPercent: 100,
            opacity: 1,
            duration: 0.75,
        });
        gsap.fromTo(menuItems, {
          opacity: 0,
          y: -40
        },
        {
          opacity: 1,
          y: 0,
          ease: "elastic",
          duration: .1,
          delay: .5,
          stagger: 0.2
        });
      } else {
         gsap.fromTo(navMenu, {
          yPercent: 100,
          opacity: 1,
        }, 
        {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            delay: 1.5
        });
        gsap.fromTo(menuItems, {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -40,
          ease: "ease.out",
          duration: .2,
          stagger: 0.2
        });
      }
    },
  },
  watch: {
      showMenu() {
          this.toggleMenu()
      }
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.menu-wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: -100%;
  left: 0;
  z-index: 99;
  background: @pink;
  .menu-container {
    margin-top: 10rem;
    .menu-list ul li a{
      text-align: left;
      left: 15rem;
      position: relative;
      font-size: 3rem;
      padding: 0.5rem;
      opacity: 0;
      transition: all 0.8s ease;
      &:hover {
        background: none;
        color: @yellow;
      }
    }
    .menu-list ul li a.router-link-exact-active {
      color: @white;
      &:before {
        content: "";
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        position: absolute;
        left: -3rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.1;
        background: @yellow;
        display: block;
      }
      &:after {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        left: -2.2rem;
        top: 50%;
        opacity: 1;
        background: @yellow;
        display: block;
      }
    }
  }
}
</style>