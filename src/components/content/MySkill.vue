<template>
  <div>
    <div class="area-region">
      <div>
        <div class="skill-bg"></div>
        <div class="skill-content">
          <div class="row justify-content-center text-center">
            <div class="col col-lg-4 col-md-4 col-sm-4 col-4">
              <h2>FrontEnd</h2>
              <ul>
                <li v-for="item in frontEnd" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="col col-lg-4 col-md-4 col-sm-4 col-4">
              <h2>BackEnd</h2>
              <ul>
                <li v-for="item in backEnd" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: "MySkill",
  data() {
    return {
      frontEnd: ["HTML", "CSS3&SCSS", "JavaScript", "Vue"],
      backEnd: [".Net Core", "Java", "Oracle", "MySQL"],
    };
  },
  mounted() {
    gsap.registerPlugin(CSSPlugin, ScrollTrigger);

    gsap.to(".skill-bg", {
      scrollTrigger: {
        trigger: ".skill-bg",
        toggleClass: "active-bg",
        scrub: true,
      },
      duration: 1,
    });

    gsap.to(".skill-content", {
      scrollTrigger: {
        trigger: ".skill-content",
        toggleClass: "active-content",
        scrub: true,
      },
      x: window.innerWidth * 0.15,
      duration: 1,
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/minxin.scss";
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
  margin-bottom: 5rem;
  overflow-x: hidden;
}

.skill-bg {
  position: absolute;
  top: 20%;
  height: 60%;
  width: 80%;
  color: var(--primary-color);
  background-color: rgba(255, 255, 255, 0.8) !important;
  background-image: url("~@/assets/images/skillBg.jpg");
  background-size: cover;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0px 0.3rem 0.5rem rgba(0, 0, 0, 80%);
}

.skill-content {
  position: absolute;
  width: 80%;
  top: 30%;
  text-shadow: white 0 0px 1px, black 1px 0px 2px, white -1px 0px 2px;
  ul {
    list-style: none;
  }
}

.active-content {
  transition: 700ms;
}

.active-bg {
  transition: 700ms;
  width: 30%;
  p {
    transform: perspective(-100vh) rotateY(45deg);
  }

  @include mq-xs {
    transform: perspective(35vh) rotateY(45deg);
    background-size: 100% 100%;
    margin-right: 1rem;
  }

  @include mq-lg {
    transform: perspective(100vh) rotateY(45deg);
  }
}
</style>