<template>
  <div class="page-title">
    <div style="overflow:hidden">
      <h1 class="page-title-content">{{ title }}</h1>
    </div>
    <span class="line"></span>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "page-title",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  mounted() {
    gsap
      .timeline()
      .from(".page-title-content", {
        y: 100,
        duration: 0.5,
        delay: 0.5,
      })
      .from(".line", {
        width: 0,
        duration: 0.5,
      });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.page-title {
  margin: 0 auto;
  padding-top: 10rem;
  @media @mobile, @large-mobile, @tablet {
    padding: 10rem 0 0 0;
  }

  h1 {
    position: relative;
    font-size: 5rem;
    color: @white;
    font-family: "averta", sans-serif;
    font-weight: 900;
    line-height: 1;
    z-index: 2;
    @media @mobile, @large-mobile, @tablet {
      font-size: 3rem;
    }
  }
  .line {
    content: "";
    display: block;
    background: @text-color;
    width: 100px;
    height: 5px;
    margin: 4rem 0;
  }
}
</style>