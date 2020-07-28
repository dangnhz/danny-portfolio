<template>
  <div id="contact">
    <div
      class="contact-wrapper container-fluid"
      :style="{minHeight: `calc(100vh - ${footerHeight})`}"
    >
      <div class="page-title col-sm-12 col-md-10 col-lg-8">
        <h1>Get In Touch</h1>
        <span class="line"></span>
      </div>
      <div class="contact-detail col-sm-12 col-md-10 col-lg-8">
        <p>
          I'm currently looking for any new opportunities, my inbox is always open.
          <br />Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailTo: dangnh3091@gmail.com">
          <div class="btn flat-btn">Say Hello</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      footerHeight: null,
    };
  },
  created() {
    this.footerHeight =
      document.getElementById("footer").getBoundingClientRect().height + "px";
  },
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.contact-wrapper {
  width: 100%;
  color: #fff;
  height: fit-content;
  padding-bottom: 5rem;

  .page-title {
    margin: 0 auto;
    padding: 10rem 0 5rem 0;
    @media @mobile, @large-mobile, @tablet {
      padding: 10rem 0 0 0;
    }
    @media @large-desktop {
      padding: 15rem 0 5rem 0;
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
      margin-top: 4rem;
    }
  }

  .contact-detail {
    margin: 0rem auto 5rem auto;
    padding: 0;
    @media @mobile, @large-mobile, @tablet {
      margin: 5rem auto;
    }
    p {
      font-size: 1.2rem;
    }
  }
}
</style>
