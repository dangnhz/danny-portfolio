<template>
  <div id="contact">
    <div
      class="contact-wrapper container-fluid"
      :style="{minHeight: `calc(100vh - ${footerHeight})`}"
    >
      <PageTitle title="Get In Touch" />
      <div class="contact-detail">
        <p>
          My inbox is always open.
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
import PageTitle from "../components/PageTitle";
export default {
  name: "contact",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components: {
    PageTitle,
  },
  data() {
    return {
      footerHeight: null,
    };
  },
  mounted() {
    this.footerHeight =
      document.getElementById("footer").getBoundingClientRect().height + "px";
  },
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.contact-wrapper {
  width: 80%;
  color: #fff;
  height: fit-content;
  padding-bottom: 5rem;
  max-width: 1920px;
  margin: 0 auto;
  @media @mobile, @large-mobile {
    width: 100%;
  }
  @media @large-desktop {
    width: 70%;
  }
  .contact-detail {
    margin: 0rem auto 5rem auto;
    padding: 0;
    @media @mobile, @large-mobile, @tablet {
      margin: 5rem auto;
    }
    p {
      font-size: 1.2rem;
      @media @mobile, @large-mobile {
        font-size: 1rem;
      }
    }
  }
}
</style>
