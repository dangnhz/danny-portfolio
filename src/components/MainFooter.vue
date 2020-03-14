<template>
    <div class="text-center p-5">
        © {{year}} Danny Ngo
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
div {
    color: @white;
    background: @bg-dark-2;
}
</style>