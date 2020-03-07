<template>
  <div class="global-cursor">
    <div id="big-ball" class="cursor-ball big-ball"></div>
    <div id="small-ball" class="cursor-ball small-ball"></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "global-cursor",
  mounted() {
    const bigBall = document.querySelector("#big-ball");
    const smallBall = document.querySelector("#small-ball");
    const hoverables = document.querySelectorAll(".hoverable");
    const hoverable_links = document.getElementsByTagName("a");

    // console.log('hoverables', hoverables)
    // Listeners
    document.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseover", onMouseHover);
      hoverables[i].addEventListener("mouseout", onMouseHoverOut);
    }
    for (let i = 0; i < hoverable_links.length; i++) {
      hoverable_links[i].addEventListener("mouseover", onMouseHover);
      hoverable_links[i].addEventListener("mouseout", onMouseHoverOut);
    }
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHoverOut);

    document.addEventListener("mouseenter", () => {
      bigBall.style.opacity = 1;
      smallBall.style.opacity = 1;
    });

    document.addEventListener("mouseleave", () => {
      bigBall.style.opacity = 0;
      smallBall.style.opacity = 0;
    });

    // Move the cursor
    function onMouseMove(e) {
      bigBall.style.opacity = 0.1;
      smallBall.style.opacity = 1;
      gsap.to(bigBall, 0.4, {
        x: e.clientX - 18,
        y: e.clientY - 18
      });
      gsap.to(smallBall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4
      });
    }

    // Hover an element
    function onMouseHover() {
      bigBall.style.opacity = 0.1;
      gsap.to(bigBall, 0.3, {
        scale: 3
      });
    }
    function onMouseHoverOut() {
      // bigBall.style.opacity = 0.1
      gsap.to(bigBall, 0.3, {
        scale: 1
      });
    }

    // magnetic button

    let magneticButtons = document.querySelectorAll(".magnetic-button");

    this.magneticButton(magneticButtons);
  },
  methods: {
    magneticButton(elements) {
      elements.forEach(element => {
        element.addEventListener("mouseleave", () => {
          gsap.to(element, 0.3, { scale: 1, x: 0, y: 0, ease:"elastic.out(1, 0.3)" });
        });

        element.addEventListener("mouseenter", () => {
          gsap.to(element, 0.3, { scale: 1, transformOrigin: "0 0" });
        });

        element.addEventListener("mousemove", e => {
          callParallax(e);
        });

        function callParallax(e) {
          parallaxIt(e, element, 80);
        }

        function parallaxIt(e, target, movement) {
          var boundingRect = target.getBoundingClientRect();
          var relX = e.pageX - boundingRect.left;
          var relY = e.pageY - boundingRect.top;
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          gsap.to(target, 0.3, {
            x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
            y: ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.width) * movement,
            ease: "Power2.easeOut"
          });
        }
      });
    }
  }
};
</script>


<style lang="less">
@import "../assets/style/setting.less";
.global-cursor {
  pointer-events: none;
}
.cursor-ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
  @media @mobile, @large-mobile, @tablet {
    display: none;
    border-radius: 50%;
  }
}
.big-ball {
  content: "";
  width: 35px;
  height: 35px;
  background: @white;
  border-radius: 50%;
  //   border: 2px solid @pink;
}
.small-ball {
  content: "";
  width: 6px;
  height: 6px;
  background: @text-color;
  border-radius: 50%;
}
</style>