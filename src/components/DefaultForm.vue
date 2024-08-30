<template>
  <div>
    <about-me />
    <my-skill />
    <work-timeline />
  </div>
</template>
<script>
import AboutMe from "./content/AboutMe.vue";
import MySkill from "./content/MySkill.vue";
import WorkTimeline from "./content/WorkTimeline.vue";
export default {
  name: "DefaultForm",
  components: { AboutMe, MySkill, WorkTimeline },
};
</script>
