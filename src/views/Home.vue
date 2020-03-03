<template>
  <div class="home">
    <project-carousel></project-carousel>
    <GlobalCursor></GlobalCursor>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalCursor from '../components/GlobalCursor';
import ProjectCarousel from '../components/ProjectCarousel';

export default {
  name: 'Home',
  components: {
    GlobalCursor,
    ProjectCarousel
  }
}
</script>

<style>
  .home {
      cursor: none;
  }
</style>
