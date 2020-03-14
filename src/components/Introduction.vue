<template>
  <section class="introduction">
    <div class="intro-wrapper row">
      <div id="intro-text-1" class="col-md-4 intro-col intro-col-1">
        <h1 style="font-family: 'Abril-Fatface'">My principle</h1>
        <p class="text text-1 mt-3">I create websites with attention to detail and faithful to the design.</p>
      </div>
      <div class="col-md-4 intro-col intro-col-2 text-center">
        <div id="intro-img-1" class="image-wrapper image-1">
          <img
            src="https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="image"
          />
        </div>
      </div>
      <div class="col-md-4 intro-col intro-col-3 d-flex align-items-end">
        <div>
          <div id="intro-img-2" class="image-wrapper image-2">
            <img
              src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="image"
            />
          </div>
          <div id="intro-text-2" class="text text-2 mt-5">
            <h1 style="font-family: 'Abril-Fatface'">My values</h1>
            <p class="mt-3"> integrity,
            <br />understanding
            <br />and
            <br />thoroughness.</p>
          </div>
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
  overflow-x: hidden;
  @media @mobile, @large-mobile, @tablet  {
      padding: 5rem 0;
  }
  .intro-wrapper {
    width: 80%;
    margin: 0 auto;
    @media @mobile, @large-mobile {
        width:100%;
        padding: 1rem;
    }
    @media @tablet {
        width:90%;
        padding: 1rem;
    }
    .text {
      font-family: "Lato-Light";
      font-size: 1.5rem;
      line-height: 2rem;
      @media @mobile, @large-mobile , @tablet{
          font-size: 1rem;
          line-height: 1.5rem;
      }
    }
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-wrapper.image-1 {
      height: 450px;
      width: 90%;
      @media @mobile, @large-mobile {
          height: 450px;
          margin-top: 2rem;
          width: 100%;
      }
      @media @tablet {
          height: 350px;
      }
      @media @large-desktop {
          height: 550px;
      }
    }
    .image-wrapper.image-2 {
      height: 150px;
      width: 75%;
      @media @mobile, @large-mobile {
          display: none;
          
      }
      @media @tablet {
          height: 110px;
      }
      @media @large-desktop {
          height: 250px;
      }
    }
    .intro-col {
      padding: 2rem;
      @media @mobile, @large-mobile {
          padding: 0;
      }
      @media @tablet {
          padding: 1rem;
      }
      h1{
          font-size: 2rem;
      }
    }
    .intro-col-1 {
        margin-top: 10rem;
        @media @mobile, @large-mobile {
          margin-top: 0;
      }
    } 
  }
}
</style>