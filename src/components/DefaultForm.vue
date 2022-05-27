<template>
  <div>
    <about-me />
    <my-skill />
    <work-timeline />
    <div></div>
  </div>
</template>
<script>
import AboutMe from "./content/AboutMe.vue";
import WorkTimeline from "./content/WorkTimeline.vue";
import MySkill from "./content/MySkill.vue";
export default {
  name: "DefaultForm",
  components: { AboutMe, WorkTimeline, MySkill },
};
</script>
