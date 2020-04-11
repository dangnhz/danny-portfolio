<template>
    <div class="page-not-found">
        <h2>Oops!</h2>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <router-link :to="{name:'home'}" class="flat-btn">GO BACK</router-link>
        
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: @white;
    h1 {
        width: fit-content;
        font-size: 20vw;
        font-weight: 700;
    }
    h3{
        font-family: "averta", sans-serif;
    }

}
</style>