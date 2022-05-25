<template>
  <div>
    <div class="area-region">
      <div class="row justify-content-center">
        <div class="col col-lg-5 col-md-12 col-sm-10 col-12">
          <div class=""></div>
          <!-- <skill-card :content="frontEnd" /> -->
          <div class="test d-flex justify-content-center align-items-center">
            <div class="test-b">123</div>
          </div>
        </div>
        <div class="col col-lg-5 col-md-12 col-sm-10 col-12">
          <!-- <skill-card :content="BackEnd" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SkillCard from "./SkillCard.vue";
export default {
  name: "MySkill",
  // components: { SkillCard },
  data() {
    return {
      frontEnd: ["HTML", "CSS3&SCSS", "JavaScript", "Vue"],
      BackEnd: [".Net Core", "Java", "Orace", "MySQL"],
    };
  },
  mounted() {
    gsap.registerPlugin(CSSPlugin, ScrollTrigger);

    gsap.to(".test", {
      scrollTrigger: {
        trigger: ".test",
        start: "top center",
        toggleClass: "active",
        scrub: true,
      },
      duration: 3,
    });

    gsap.to(".test-b", {
      scrollTrigger: {
        trigger: ".test-b",
        start: "top center",
        scrub: true,
      },
      duration: 3,
      x: 10,
    });
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.area-region {
  margin-top: 1rem;
  min-height: 350px;
  padding: 5% 10%;
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

.test {
  margin-top: 30px;
  height: 300px;
  width: 300px;
  background-color: red;
}

.test-b {
  font-size: 30px;
  width: 100px;
  transform: perspective(10vw) rotateY(-80deg) translate(10px, 0, 20px);
  z-index: 1000;
}

.active-b{

}

.active {
  transition: 700ms;
  transform: perspective(100vh) rotateY(45deg);
  p {
    transform: perspective(-100vh) rotateY(45deg);
  }
}
</style>