<template>
  <section class="introduction">
    <div class="intro-wrapper row m-0">
      <div id="intro-text" class="col-md-5 intro-col">
        <p
          class="text mt-3"
        >I create websites with attention to detail and faithfulness to the design.</p>
      </div>
      <div class="col-md-7 intro-col p-xs-0 p-sm-0">
        <div id="intro-img" class="image-wrapper">
          <img src="../assets/images/website-mockup.png" alt="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "introduction"
};
</script>

<style lang="less">
@import "../assets/style/setting.less";
.introduction {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10rem 0;
  color: @white;
  background: @bg-dark;
  overflow-x: hidden;
  max-width: 1920px;
  margin: 0 auto;
  @media @mobile, @large-mobile, @tablet {
    padding: 5rem 0;
  }
  .intro-wrapper {
    display: flex;
    align-items: center;
    width: 100%;

    @media @mobile, @large-mobile {
      width: 100%;
      padding: 1rem;
    }
    @media @tablet {
      width: 100%;
      padding: 1rem;
    }
    .text {
      font-family: "averta", sans-serif;
      font-size: 1.2rem;
      line-height: 2.5rem;
      padding: 0rem 2rem 0rem 5rem;
      @media @mobile, @large-mobile {
        font-size: 1.2rem;
        line-height: 2.2rem;
        margin-bottom: 10rem;
        padding: 1rem;
      }
      @media @tablet {
        font-size: 1.3rem;
        line-height: 2.5rem;
        margin-bottom: 3rem;
        padding: 2rem;
      }
      @media @large-desktop {
        font-size: 1.5rem;
        line-height: 2.5rem;
        padding: 0 3rem 0 10rem;
      }
    }
    .image-wrapper img {
      width: 90%;
      height: 90%;
      object-fit: contain;
      transition: 0.5s;
      &:hover {
        transform: scale(1.05);
      }
      @media @mobile, @large-mobile {
        width: 100%;
      }
    }
  }
}
</style>