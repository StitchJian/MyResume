<template>
  <div>
    <div class="area-region"></div>
  </div>
</template>
<script>
export default {
  name: "MySkill",
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
    url("~@/assets/images/image2.jpg");
  background-size: cover;
  background-position: right bottom;
  transform: skewY(7deg);
  margin-top: 5rem;
}
</style>