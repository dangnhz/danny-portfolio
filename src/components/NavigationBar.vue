<template>
  <div class="navbar-container">
    <!-- Navbar start -->
    <div id="nav-bar" class="nav-bar">
      <div class="row d-flex align-items-center">
        <div class="col-4 btn-menu">
          <button
            id="hamburger-icon"
            class="hamburger-icon magnetic-button hoverable"
            @click="toggleMenu" >
            <div class="hamburger-el"></div>
            <div class="hamburger-el"></div>
          </button>
          <span
            @click="toggleMenu"
            class="hamburger-caption magnetic-button hoverable"
          >{{hamburgerCaption}}</span>
        </div>
        <div class="col-4 text-center" id="my-logo">
          <router-link to="/" class="logo-wrapper">
          <svg id="danny-logo" x="0px" y="0px" viewBox="0 0 595.28 841.89" style="enable-background:new 0 0 595.28 841.89;" xml:space="preserve">
            <g>
              <g>
                <polygon class="st0" points="399.44,335.27 427.7,335.27 427.7,501.04 289.34,376.6 289.34,335.27 399.86,435.23 "/>
                <rect x="289.72" y="476.11" class="st0" width="27.79" height="24.93"/>
              </g>
              <path class="st0" d="M283.9,380.09c-3.89-9.91-9.42-18.2-16.6-24.87c-7.18-6.67-15.82-11.67-25.9-15c-10.08-3.33-21.31-5-33.7-5
                h-55.75v124.26l28.85-23.63l-0.21-71.99h28.65c14.39,0,52.86,9.07,54.68,50.09c2.19,49.42-52.48,60.24-52.48,60.24l-26.31-0.25
                l-32.88,27.09h49.25c12.06,0,23.46-1.75,34.2-5.26c10.74-3.51,20.11-8.82,28.13-15.93c8.01-7.1,14.33-16.06,18.95-26.85
                c4.62-10.79,6.94-23.55,6.94-38.29C289.72,401.54,287.77,390.01,283.9,380.09z"/>
            </g>
          </svg>

          </router-link>
        </div>
        <div id="btn-projects" class="col-4 text-right btn-projects">
          <router-link :to="{name:'works'}">
            <span class="btn-projects-text">All Projects</span>
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
      <div class="menu-background"></div>
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
        <div class="more-info col-xs-12 col-sm-12 col-md-4">
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
        <div class="text-shadow">
          <h1 class="text-shadow-content">HOME</h1>
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
    const menuBackground= document.querySelector('.menu-background');
    const menuItems = document.querySelectorAll(".menu-item");
    const moreInfo = document.querySelector(".more-info")
    const textShadow = document.querySelector(".text-shadow-content");
    const dannyLogo = document.querySelector("#danny-logo");
    const btnProjects = document.querySelector("#btn-projects");

    menuItems.forEach(item => {
      item.addEventListener("mouseover", e => {
        showText(e);
      });

      item.addEventListener("mouseleave", e => {
        hideText(e);
      });
    });

    function showText(e) {
      textShadow.innerHTML = e.target.innerText;
      gsap.fromTo(textShadow, {
        y:0,
        x:500,
        opacity: 0,
        
      },
      {
        x:0,
        opacity:1,
        ease: "elastic.out(1, 0.3)",
        duration: 0.2,
        delay: 0.5
      }
      )
    }

    function hideText() {
      gsap.to(textShadow, {
        y:0,
        x:-1000,
        opacity: 0,
        ease: "ease.out",
        duration: 0.2
      })
    }

//  set menu items position
    this.tl.set(menuItems, { 
      x: -40,
      opacity: 0
    });

    this.tl.set(moreInfo, { 
      x: 300,
      opacity: 0
    });

    // hide logo
    
    this.tl.to(dannyLogo, {
      opacity: 0,
      y:-100,
      duration: 0.2
    })

    // hide btn projects
    this.tl.to(btnProjects, {
      opacity: 0,
      x: 300,
      duration: 0.5
    })

    this.tl.to(navMenu, {
      height: "100vh",
      opacity: 1,
      ease: "power2.out",
      duration: 0.5
    });

    this.tl.to(menuBackground, {
      height: '100vh',
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })

    this.tl.to(menuItems, {
      opacity: 1,
      x: 0,
      ease: "elastic.out(1, 0.4)",
      duration: 0.8,
      stagger: 0.2
    });
    
    this.tl.to(moreInfo, {
      opacity: 1,
      x: 0,
      ease: "elastic.out(1, 0.4)",
      duration: 0.5,
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
      background: @text-color;
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
  #danny-logo {
    width: 6rem;
    fill:@white
    
    }
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
    color: @text-color;
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
  padding: 0;
  z-index: 100;
  background: rgba(255, 8, 111, 1);
  overflow: hidden;
  .menu-background{
    width: 100%;
    height: 0;
    opacity: 1;
    position: absolute;
    z-index: -1;
    background: @bg-dark;
  }
  .menu-container {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    .menu-list ul li {
      @media @mobile, @large-mobile {
        text-align: center;
      }
      a {
        margin: 0;
        color: @white;
        width: fit-content;
        left: 10rem;
        position: relative;
        font-size: 4.5rem;
        line-height: 4.5rem;
        padding: 0.5rem;
        display: inline-block;
        transition: color 0.8s;
        @media @mobile, @large-mobile, @tablet {
          left: 1rem;
          font-size: 2.5rem;
          line-height: 3rem;
        }
        @media @tablet {
          left: 7rem;
          font-size: 3rem;
          line-height: 3rem;
        }
        &:hover {
          background: none;
          color: @text-color;
        }
      }
    }
    .menu-list ul li a.router-link-exact-active {
      color: @text-color;
      &:before {
        content: "";
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        position: absolute;
        left: -3.5rem;
        top: 20px;
        opacity: 0.2;
        background: @text-color;
        display: block;
        animation: grow 2s infinite;
        @keyframes grow {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(0);
          }
        }

        @media @mobile, @large-mobile, @tablet {
          top: 10px
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
        background: @text-color;
        display: block;
      }
    }
    .more-info {
      display: block;
      color: @white;
      margin-top: 6rem;
      font-size: 0.8rem;
      @media @mobile, @large-mobile {
        display: none;
      }
    }

    .text-shadow {
      margin-top: -25px;
      opacity: 0.04;
      -webkit-transition-delay: 0.5s;
      transition-delay: 0.5s;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translateY(-50%, -50%);
      pointer-events: none;
      .text-shadow-content {
        display: block;
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 18vw;
        margin-top: 40px;
        font-weight: 900;
        color: @white;
        opacity: 0;
        text-transform: uppercase;
        -webkit-transition: all 300ms linear;
        transition: all 300ms linear;
      }
    }
  }
}


</style>