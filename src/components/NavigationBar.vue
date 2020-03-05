<template>
  <div class="navbar-container">
    <!-- Navbar start -->
    <div id="nav-bar" class="nav-bar">
      <div class="row d-flex align-items-center">
        <div class="col-4 btn-menu">
          <button
            id="hamburger-icon"
            class="hamburger-icon magnetic-button hoverable"
            @click="toggleMenu"
          >
            <div class="hamburger-el"></div>
            <div class="hamburger-el"></div>
          </button>
          <span
            @click="toggleMenu"
            class="hamburger-caption magnetic-button hoverable"
          >{{hamburgerCaption}}</span>
        </div>
        <div class="col-4 text-center" id="my-logo">
          <router-link to="/" class="logo-wrapper">DN</router-link>
        </div>
        <div class="col-4 text-right btn-projects">
          <router-link :to="{name:'works'}">
            <span class="btn-projects-text">View Projects</span>
            <svg class="ml-3 btn-projects-icon" width="20" height="20" fill="none">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="translate(0 6)" />
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="translate(16 6)" />
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="translate(8 8)" />
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="translate(8)" />
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="translate(3 15)" />
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="translate(13 15)" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Navbar end -->

    <!-- Menu Start -->
    <div id="menu-wrapper" class="menu-wrapper">
      <div class="menu-container row">
        <div class="menu-list col-xs-12 col-sm-12 col-md-8">
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
              <router-link class="menu-item" :to="{name:'works'}">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="more-info col-xs-12 col-sm-12 col-md-4 menu-item">
          <div class="mt-5 mb-5 mb-xs-2">
            <b>More</b>
          </div>
          <div class="row">
            <a href="#" class="col-lg-12 col-md-12 col-6 text-light mb-2">
              <v-icon class="mr-2" name="brands/facebook-square"></v-icon>Facebook
            </a>
            <a href="#" class="col-lg-12 col-md-12 col-6 text-light mb-2">
              <v-icon class="mr-2" name="brands/linkedin"></v-icon>Linkedin
            </a>
            <a href="mailTo: dangnh3091@gmail.com" class="col-lg-12 col-md-12 col-6 text-light">
              <v-icon class="mr-2" name="envelope"></v-icon>Email
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu end  -->
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "nav-bar",
  data() {
    return {
      hamburgerCaption: "Menu",
      showMenu: false,
      tl: gsap.timeline({ paused: true })
    };
  },
  methods: {
    toggleMenu() {
      const hamburger = document.querySelector("#hamburger-icon");
      if (this.showMenu == false) {
        this.hamburgerCaption = "Close";
        hamburger.classList.add("close-menu");
        this.tl.play();
        this.showMenu = true;
      } else {
        this.hamburgerCaption = "Menu";
        hamburger.classList.remove("close-menu");
        this.tl.reverse();
        this.showMenu = false;
      }
    }
  },
  mounted() {
    const navMenu = document.querySelector("#menu-wrapper");
    const menuItems = document.querySelectorAll(".menu-item");

    //set menu position
    // this.tl.set(navMenu, {
    //   opacity: 0
    // });

    this.tl.set(menuItems, {
      x: -40,
      opacity: 0
    });

    this.tl.to(navMenu, {
      height: "100vh",
      opacity: 1,
      ease: "power2.out",
      duration: 0.5
    });

    this.tl.to(menuItems, {
      opacity: 1,
      x: 0,
      ease: "elastic.out(1, 0.4)",
      duration: 0.8,
      delay: 0.2,
      stagger: 0.2
    });

    navMenu.addEventListener("click", () => {
      this.toggleMenu();
    });
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";

// navbar styling
.nav-bar {
  // padding: 1rem 2rem;
  width: 100%;
  color: @white;
  mix-blend-mode: difference;
  background: transparent;
  position: fixed;
  top: 2rem;
  left: 0;
  z-index: 999;
}

.btn-menu {
  position: relative;
  top: 0;
  color: @text-color;
  left: 5rem;
  cursor: pointer;
  @media @mobile, @large-mobile {
    left: 1.5rem;
  }
  .hamburger-icon {
    background: none;
    border: none;
    margin-top: 3px;
    @media @mobile, @large-mobile, @tablet {
      -o-transform: none !important;
      -moz-transform: none !important;
      -ms-transform: none !important;
      -webkit-transform: none !important;
      transform: none !important;
    }
    .hamburger-el {
      content: "";
      background: @white;
      margin: 5px;
      display: block;
      width: 25px;
      height: 2px;
      transition: 0.3s ease;

      &:nth-child(2) {
        animation: menuIcon 5s ease 2s infinite;
        @keyframes menuIcon {
          30% {
            transform: scaleX(0.4);
            transform-origin: left center;
          }
          40% {
            transform-origin: right center;
          }
          60%,
          80% {
            transform: scaleX(1);
            transform-origin: right center;
          }
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
    margin-left: 1rem;
    transition: 0.5s;
    color: @white;
    @media @mobile, @large-mobile {
      display: none;
    }
    @media @tablet {
      transform: none !important;
    }
    &:hover {
      color: @text-color;
    }
  }
}

.logo-wrapper {
  font-size: 2rem;
  font-weight: 700;
  color: @white;
}
.btn-projects {
  position: relative;
  right: 5rem;
  @media @mobile, @large-mobile {
    right: 1.5rem;
  }
  .btn-projects-text {
    color: @white;
    @media @mobile, @large-mobile {
      display: none;
    }
  }
  .btn-projects-icon {
      color: @white;
      margin-top: -2px;
    }
}

// end navbar styling

// menu styling

.menu-wrapper {
  width: 100%;
  height: 0;
  position: fixed;
  left: 0;
  padding: 0 1rem;
  z-index: 100;
  background: #333;
  overflow: hidden;
  .menu-container {
    margin-top: 10rem;
    .menu-list ul li {
      @media @mobile, @large-mobile {
        text-align: center;
      }
      a {
        margin: 0;
        color: @white;
        width: fit-content;
        left: 15rem;
        position: relative;
        font-size: 3rem;
        line-height: 3rem;
        padding: 0.5rem;
        display: inline-block;
        transition: color 0.8s;
        @media @mobile, @large-mobile, @tablet {
          left: 0;
          font-size: 2rem;
        }
        @media @tablet {
          left: 7rem;
          font-size: 2rem;
        }
        &:hover {
          background: none;
          color: @text-color ;
        }
      }
    }
    .menu-list ul li a.router-link-exact-active {
      color: @yellow;
      &:before {
        content: "";
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        position: absolute;
        left: -3rem;
        top: 1rem;
        opacity: 0.1;
        background: @yellow;
        display: block;
        // transform-origin: ;
        animation: grow 2s infinite;
        @keyframes grow {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
      }
      &:after {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        left: -2.2rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
        background: @yellow;
        display: block;
      }
    }
    .more-info {
      color: @white;
      margin-top: 6rem;
      font-size: 0.8rem;
      @media @mobile, @large-mobile {
        display: none;
      }
    }
  }
}
</style>