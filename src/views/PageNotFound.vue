<template>
    <div class="page-not-found">
        pageNotFound
    </div>
</template>

<script>
    export default {
        name: 'page-not-found'
    }
</script>

<style lang="less" scoped>
@import '../assets/style/setting.less';
.page-not-found {
    height: 100vh;
    width: 100%;
    background: @bg-dark;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
</style>