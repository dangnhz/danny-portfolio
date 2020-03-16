<template>
    <div class="project-container">
        <h1 v-if="project">{{project.title}}</h1>
        <h1 v-else>Project Not found</h1>
    </div>
</template>

<script>
    export default {
        name:'project',
        data() {
            return {
                project: this.$route.params.project
            }
        },
        
    }
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.project-container {
    min-height: 100vh;
    color: @white;
}
</style>