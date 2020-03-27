<template>
  <div id="contact">
    <PageLoader></PageLoader>
    <h1>Contact</h1>
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

<style lang="less" scoped>
div {
height: 100vh;
color: #fff;
}
</style>
