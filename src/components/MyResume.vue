<template>
    <section id="#my-resume" class="resume-container">
        my resume
    </section>
</template>

<script>
    export default {
        name: 'my-resume'
    }
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.resume-container {
    position: relative;
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 10rem 0;
    background: @bg-dark;
}
</style>