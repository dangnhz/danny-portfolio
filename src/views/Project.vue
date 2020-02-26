<template>
    <div>
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

<style lang="scss" scoped>

</style>