<template>
  <section class="get-in-touch">
    <h1>Get In Touch</h1>
    <span class="line"></span>
    <p>
      I'm currently looking for any new opportunities, my inbox is always open.
      Whether you have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    <a class="flat-btn" href="mailTo: dangnh3091@gmail.com">Say Hello</a>
  </section>
</template>

<script>
export default {
  name: "get-in-touch",
};
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.get-in-touch {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  margin-bottom: 10rem;
  h1 {
    font-size: 5rem;
    font-family: "averta", sans-serif;
    font-weight: 900;
    @media @mobile, @large-mobile {
      font-size: 2rem;
    }
    @media @tablet {
      font-size: 3rem;
    }
  }

  .line {
    content: "";
    display: block;
    background: @text-color;
    width: 100px;
    height: 5px;
    margin: 2rem auto;
  }

  p {
    font-family: "averta", sans-serif;
    font-size: 1.2rem;
    max-width: 800px;
    @media @mobile, @large-mobile {
      padding: 1rem;
      font-size: 1.2rem;
    }
    @media @tablet {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }

  a {
    margin: 0 auto;
  }
}
</style>