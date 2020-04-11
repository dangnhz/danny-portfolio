<template>
  <section class="introduction">
    <div class="intro-wrapper row">
      <div id="intro-text" class="col-md-6 intro-col">
        <p class="text mt-3">I create websites with attention to detail and faithfulness to the design.</p>
      </div>
      <div class="col-md-6 intro-col">
        <div id="intro-img" class="image-wrapper">
          <img
            src="../assets/images/website-mockup.png"
            alt="image"
          />
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
  @media @mobile, @large-mobile, @tablet  {
      padding: 5rem 0;
  }
  .intro-wrapper {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    @media @mobile, @large-mobile {
        width:100%;
        padding: 1rem;
    }
    @media @tablet {
        width:100%;
        padding: 1rem;
    }
    .text {
      font-family: "averta", sans-serif;
      font-size: 2rem;
      line-height: 4rem;
      padding: 0rem 2.5rem;
      @media @mobile, @large-mobile{
          font-size: 1.5rem;
          line-height: 2.5rem;
          margin-bottom: 10rem;
          padding: 0rem;
      }
      @media @tablet{
          font-size: 1.5rem;
          line-height: 3rem;
          margin-bottom: 3rem;
          padding: 2rem;
      }
      @media @large-desktop  {
        font-size: 2.5rem;
      }
    }
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 0.8s;
      &:hover {
        transform: scale(1.1)
      }
    }
  }
}
</style>