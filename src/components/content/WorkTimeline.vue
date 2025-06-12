<template>
  <div>
    <section id="timeline">
      <div class="experience-title text-center mb-3">
        <h2>Experience</h2>
      </div>
      <div class="exp-card-wrapper">
        <div class="exp-card exp-card--step1">
          <div class="head">
            <div class="number-box">
              <span>01</span>
            </div>
            <h3>{{ $t('workTimeline.part1.title') }}</h3>
          </div>
          <div class="body">
            <p>{{ $t('workTimeline.part1.content1') }}</p>
            <p>{{ $t('workTimeline.part1.content2') }}</p>
            <p class="text-end" @click="showModal('A')">
              <i>{{ $t('workTimeline.overflow') }}</i>
            </p>
            <p class="skill-tag">
              <span>Java</span>
              <span>JSP</span>
              <span>enovia-PLM</span>
            </p>
          </div>
        </div>

        <div class="exp-card exp-card--step2">
          <div class="head">
            <div class="number-box">
              <span>02</span>
            </div>
            <h3>{{ $t('workTimeline.part2.title') }}</h3>
          </div>
          <div class="body">
            <p>{{ $t('workTimeline.part2.content1') }}</p>
            <p class="text-end" @click="showModal('B')">
              <i>{{ $t('workTimeline.overflow') }}</i>
            </p>
            <p class="skill-tag">
              <span>Visual Basic</span>
              <span>MX Component</span>
            </p>
          </div>
        </div>

        <div class="exp-card exp-card--step3">
          <div class="head">
            <div class="number-box">
              <span>03</span>
            </div>
            <h3>{{ $t('workTimeline.part3.title') }}</h3>
          </div>
          <div class="body">
            <p>{{ $t('workTimeline.part3.content1') }}</p>
            <p>{{ $t('workTimeline.part3.content2') }}</p>
            <p>{{ $t('workTimeline.part3.content3') }}</p>
            <p>{{ $t('workTimeline.part3.content4') }}</p>
            <p class="text-end" @click="showModal('C')">
              <i>{{ $t('workTimeline.overflow') }}</i>
            </p>
            <p class="skill-tag">
              <span>Vue</span>
              <span>Webpack</span>
              <span>.Net Core</span>
              <span>Oracle</span>
              <span>SQLServer</span>
              <span>Android</span>
            </p>
          </div>
        </div>

        <div class="exp-card exp-card--step4">
          <div class="head">
            <div class="number-box">
              <span>04</span>
            </div>
            <h3>{{ $t('workTimeline.part4.title') }}</h3>
          </div>
          <div class="body">
            <p>{{ $t('workTimeline.part4.content1') }}</p>
            <p>{{ $t('workTimeline.part4.content2') }}</p>
            <p class="text-end" @click="showModal('D')">
              <i>{{ $t('workTimeline.overflow') }}</i>
            </p>
            <p class="skill-tag">
              <span>Vue</span>
              <span>.Net6</span>
              <span>Java</span>
              <span>SQL Server</span>
              <span>Azure DevOps</span>
              <span>NUnit</span>
              <span>Cypress</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <modal-a ref="modalA" />
    <modal-b ref="modalB" />
    <modal-c ref="modalC" />
    <modal-d ref="modalD" />
  </div>
</template>
<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import ModalC from "./ModalC";
import ModalD from "./ModalD";

export default {
  name: "WorkTimeline",
  components: { ModalA, ModalB, ModalC, ModalD },
  mounted() {
    gsap.registerPlugin(CSSPlugin, ScrollTrigger);
    const boxes = gsap.utils.toArray(".exp-card");
    boxes.forEach((box) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top center",
          toggleClass: "active",
          scrub: true,
        },
      });
    });
  },
  methods: {
    showModal(value) {
      this.$refs["modal" + value].show();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "scss/WorkTimeline.scss";
</style>