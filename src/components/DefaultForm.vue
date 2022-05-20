<template>
  <div>
    <about-me />
    <work-timeline />
    <div class="area-region"></div>
    <div></div>
  </div>
</template>
<script>
import AboutMe from "./content/AboutMe.vue";
import WorkTimeline from "./content/WorkTimeline.vue";
export default {
  name: "DefaultForm",
  components: { AboutMe, WorkTimeline },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.area-region {
  padding: 15rem 10rem;
  background-image: linear-gradient(
      to right bottom,
      var(--secondary-color),
      var(--primary-color)
    ),
    url(https://yipeechen.github.io/resume/images/header-bg-min.jpg);
  background-size: cover;
  transform: skewY(7deg);
  margin-top: 5rem;
}
</style>