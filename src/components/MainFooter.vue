<template>
    <div id="footer" class="footer text-center">
        <div class="row">
            <div class="col-md-6 col-sm-12">
            Danny Ngo © {{year}} 
        </div>
        <div class="col-md-6 col-sm-12 social-group">
            <a href="https://www.linkedin.com/in/dang-nhz" target="_blank" class="col-lg-12 col-md-12 col-6  mb-3">
              <v-icon class="mr-2" name="brands/linkedin"></v-icon>LinkedIn
            </a>
            <a href="https://github.com/dangnhz" target="_blank" class="col-lg-12 col-md-12 col-6  mb-3">
              <v-icon class="mr-2" name="brands/github"></v-icon>Github
            </a>
            <a href="mailTo: dangnh3091@gmail.com" class="col-lg-12 col-md-12 col-6">
              <v-icon class="mr-2" name="envelope"></v-icon>Email
            </a>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main-footer',
        data() {
            return {
                year: null
            }
        },
        mounted () {
            let date = new Date();
            this.year = date.getFullYear();
        },
    }
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.footer {
    padding: 4rem 0;
    color: @white;
    background: @bg-dark-2;
    overflow: hidden;
    .social-group {
        width: 100%;
        @media @mobile, @large-mobile {
            margin-top: 2rem;
            font-size: 1rem;
            padding: 0;
        }
        a {
            color: @text-grey;
            transition: 0.5s;
            height: 2rem;
            &:hover {
                color: @white;
            }
        }
    }
}
</style>