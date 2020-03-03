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
      bigBall.style.opacity = 0.1
      gsap.to(bigBall, 0.3, {
        scale: 3
      });
    }
    function onMouseHoverOut() {
        // bigBall.style.opacity = 1
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
        let isMagnetic = false;
        var isTransformed;
        var offsetHoverMax = element.getAttribute("offset-hover-max") || 0.7;
        var offsetHoverMin = element.getAttribute("offset-hover-min") || 0.5;

        document.addEventListener("mousemove", e => {
          var mouse = {
            x: e.clientX,
            y: e.clientY - window.scrollY
          };
          var maxDistance = isMagnetic ? offsetHoverMax : offsetHoverMin;
          var width = element.offsetWidth;
          var height = element.offsetHeight;
          var offset = element.getBoundingClientRect();
          var center = {
            x: offset.left + width / 2,
            y: offset.top + height / 2
          };
          var dx = mouse.x - center.x;
          var dy = mouse.y - center.y;

          isTransformed = false;

          if (Math.sqrt(dx * dx + dy * dy) < width * maxDistance) {
            isTransformed = true;
            if (!isMagnetic) isMagnetic = true;
            onHover(dx, dy);
          }

          if (!isTransformed && isMagnetic) {
            onLeave();
            isMagnetic = false;
          }
        });

        function onHover(x, y) {
          gsap.to(element, 0.4, {
            x: x * 0.8,
            y: y * 0.8,
            //scale: .9,
            rotation: x * 0.05,
            ease: "power2.out"
          });
        }

        function onLeave() {
          gsap.to(element, 0.7, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: "elastic.out(1, 0.3)"
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
  background: @yellow;
  border-radius: 50%;
}
</style>