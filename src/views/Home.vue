<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <AboutMe></AboutMe>
    <project-carousel></project-carousel>
    <GlobalCursor></GlobalCursor>
  </div>
</template>

<script>
// import VerticalLine from '../components/VerticalLine'
import HomeHeader from '../components/HomeHeader';
import AboutMe from '../components/AboutMe'
import GlobalCursor from '../components/GlobalCursor';
import ProjectCarousel from '../components/ProjectCarousel';

export default {
  name: 'Home',
  components: {
    GlobalCursor,
    ProjectCarousel,
    HomeHeader,
    AboutMe
  }
}
</script>

<style>
  .home {
      cursor: none;
      width: 100%;
      height: 100%;
  }
</style>
