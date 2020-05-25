<template>
  <div class="global-cursor">
    <div id="big-ball" class="cursor-ball big-ball" ref="bigBall"></div>
    <div id="small-ball" class="cursor-ball small-ball" ref="smallBall"></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "new-global-cursor",
  props: ["targets"],
  data() {
    return {
      scale: 1,
      bigBallPosX: null,
      bigBallPosY: null,
      bigBallDuration: 0.5,
      smallBallDuration: 0.1,
      smallBallPosX: null,
      smallBallPosY: null
    };
  },
  methods: {
    customCursor(e, bigBall, smallBall) {
      // bigBall position
      this.bigBallPosX = e.clientX - bigBall.clientWidth / 2;
      this.bigBallPosY = e.clientY - bigBall.clientHeight / 2;

      //small ball cursor
      this.smallBallPosX = e.clientX - smallBall.clientWidth / 2;
      this.smallBallPosY = e.clientY - smallBall.clientHeight / 2;

      // on hover selected targets

      const setScaleRatio = () => {
        let ratio =
          e.target.getBoundingClientRect().width / bigBall.clientWidth;
        if (ratio < 1.1) this.scale = ratio * 2.5;
        else this.scale = ratio * 1.1;
      };

      if (
        this.targets.length > 0 &&
        this.targets.includes(e.target.tagName.toLowerCase())
      ) {
        setScaleRatio();

        // let targetRect = e.target.getBoundingClientRect();
        // this.smallBallPosX = targetRect.left - 8;
        // this.smallBallPosY = targetRect.top + targetRect.height / 2;
      } else {
        this.scale = 1;
      }

      // move the cursor
      gsap.to(bigBall, {
        x: this.bigBallPosX,
        y: this.bigBallPosY,
        scale: this.scale,
        duration: this.bigBallDuration
      });
      gsap.to(smallBall, {
        x: this.smallBallPosX,
        y: this.smallBallPosY,
        duration: this.smallBallDuration
      });
    },

    // magnetic button method
    magneticButton(elements) {
      elements.forEach(element => {
        element.addEventListener("mouseleave", () => {
          gsap.to(element, 0.3, {
            scale: 1,
            x: 0,
            y: 0,
            ease: "elastic.out(1, 0.3)"
          });
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

          gsap.to(target, 0.2, {
            x:
              ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
            y:
              ((relY - boundingRect.height / 2 - scrollTop) /
                boundingRect.width) *
              movement,
            ease: "Power2.easeOut"
          });
        }
      });
    }
  },
  mounted() {
    const bigBall = this.$refs.bigBall;
    const smallBall = this.$refs.smallBall;
    document.addEventListener("mousemove", e =>
      this.customCursor(e, bigBall, smallBall)
    );

    // onclick
    document.addEventListener("mousedown", () => {
      gsap.to(this.$refs.bigBall, {
        scale: 3,
        duration: 0.3
      });
    });

    document.addEventListener("mouseup", () => {
      gsap.to(this.$refs.bigBall, {
        scale: 1,
        duration: 0.3
      });
    });

    // magnetic button

    let magneticButtons = document.querySelectorAll(".magnetic-button");

    this.magneticButton(magneticButtons);
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
  // mix-blend-mode: difference;
  z-index: 99999;
  pointer-events: none;
  transform: translate(-100%, -100%);
  @media @mobile, @large-mobile, @tablet {
    display: none;
    border-radius: 50%;
  }
}
.big-ball {
  content: "";
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.1;
  // border: 2px solid #fff;
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