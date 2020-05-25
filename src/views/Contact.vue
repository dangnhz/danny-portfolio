<template>
  <div id="contact">
    <PageLoader></PageLoader>
    <div class="contact-wrapper container-fluid">
      <div class="page-title col-sm-12 col-md-10 col-lg-8">
        <h1>Contact me</h1>
        <span class="line"></span>
      </div>
      <div class="contact-detail col-sm-12 col-md-10 col-lg-8">
        <div class="phone contact-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="phone_24px">
          <path id="icon/communication/phone_24px" fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 6.25H8.125C8.35417 6.25 8.54167 6.4375 8.54167 6.66667C8.54167 7.1875 8.625 7.6875 8.77917 8.15417C8.825 8.3 8.79167 8.4625 8.675 8.57917L7.75833 9.49583C8.35833 10.675 9.325 11.6375 10.5042 12.2417L11.4208 11.325C11.5042 11.2458 11.6083 11.2042 11.7167 11.2042C11.7583 11.2042 11.8042 11.2083 11.8458 11.225C12.3125 11.3792 12.8167 11.4625 13.3333 11.4625C13.5625 11.4625 13.75 11.65 13.75 11.8792V13.3333C13.75 13.5625 13.5625 13.75 13.3333 13.75C9.42083 13.75 6.25 10.5792 6.25 6.66667C6.25 6.4375 6.4375 6.25 6.66667 6.25ZM7.725 7.08333C7.75 7.45417 7.8125 7.81667 7.9125 8.1625L7.4125 8.6625C7.24167 8.1625 7.13333 7.63333 7.09583 7.08333H7.725ZM11.8333 12.0917C12.1875 12.1917 12.55 12.2542 12.9167 12.2792V12.9C12.3667 12.8625 11.8375 12.7542 11.3333 12.5875L11.8333 12.0917Z" fill="white" fill-opacity="1"/>
          <path id="Ellipse 4" d="M18.5 10C18.5 14.9245 14.5079 18.9167 9.58333 18.9167C4.65879 18.9167 0.666664 14.9245 0.666664 10C0.666664 5.07547 4.65879 1.08334 9.58333 1.08334C14.5079 1.08334 18.5 5.07547 18.5 10Z" stroke="white" stroke-width="0.5"/>
          </g>
          </svg>
          <span>+61 449 869 859</span>
        </div>
        <div class="email contact-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="mail_outline_24px">
          <path id="icon/communication/mail_outline_24px" fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 6.66667H6.66665C6.20832 6.66667 5.83749 7.04167 5.83749 7.5L5.83332 12.5C5.83332 12.9583 6.20832 13.3333 6.66665 13.3333H13.3333C13.7917 13.3333 14.1667 12.9583 14.1667 12.5V7.5C14.1667 7.04167 13.7917 6.66667 13.3333 6.66667ZM6.66664 8.33334L9.99998 10.4167L13.3333 8.33334V12.5H6.66664V8.33334ZM6.66664 7.5L9.99998 9.58334L13.3333 7.5H6.66664Z" fill="white" fill-opacity="1"/>
          <circle id="Ellipse 2" cx="9.99999" cy="9.99999" r="8.91667" stroke="white" stroke-width="0.5"/>
          </g>
          </svg>
          <span>dangnh3091@gmail.com</span>

        </div>
        <div class="address contact-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.5 10C18.5 14.9245 14.5079 18.9167 9.58334 18.9167C4.6588 18.9167 0.666672 14.9245 0.666672 10C0.666672 5.07547 4.6588 1.08334 9.58334 1.08334C14.5079 1.08334 18.5 5.07547 18.5 10Z" stroke="white" stroke-width="0.5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4.25C7.08125 4.25 5.125 6.20625 5.125 8.625C5.125 11.9062 9.5 16.75 9.5 16.75C9.5 16.75 13.875 11.9062 13.875 8.625C13.875 6.20625 11.9187 4.25 9.5 4.25ZM6.375 8.625C6.375 6.9 7.775 5.5 9.5 5.5C11.225 5.5 12.625 6.9 12.625 8.625C12.625 10.425 10.825 13.1187 9.5 14.8C8.2 13.1313 6.375 10.4062 6.375 8.625ZM7.9375 8.625C7.9375 7.76205 8.63705 7.0625 9.5 7.0625C10.0582 7.0625 10.5741 7.36031 10.8532 7.84375C11.1323 8.32719 11.1323 8.92281 10.8532 9.40625C10.5741 9.88969 10.0582 10.1875 9.5 10.1875C8.63705 10.1875 7.9375 9.48794 7.9375 8.625Z" fill="white" fill-opacity="1"/>
          </svg>
          <span>Unit 9, 54-56 Chandos Street, Ashfield, Sydney</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageLoader from '../components/PageLoader'
  export default {
    name: 'contact',
    components: {
      PageLoader
    },
  }
</script>

<style lang="less">
@import "../assets/style/setting.less";
.contact-wrapper {
  width: 100%;
  height: 100vh;
  color: #fff;
  .page-title {
    margin: 0 auto;
    padding: 15rem 0 5rem 0;
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
      content:'';
      display: block;
      background: @text-color;
      width: 100px;
      height: 5px;
      margin-top: 4rem;
    }
  }

  .contact-detail {
    margin: 3rem auto;
    padding: 0;
    @media @mobile, @large-mobile, @tablet {
      margin: 5rem auto;
    }

    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      svg {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
      }
      span {
        font-size: 2rem;
        width: 100%;
        @media @mobile, @large-mobile, @tablet {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
