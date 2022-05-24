<template>
  <div>
    <section id="timeline">
      <div class="experience-title text-center mb-3">
        <h2 @click="simpleFade">Experience</h2>
      </div>
      <div class="exp-card-wrapper">
        <div id="aa" class="exp-card exp-card--step1">
          <div class="head">
            <div class="number-box">
              <span>01</span>
            </div>
            <h2>Enovia PLM</h2>
          </div>
          <div class="body">
            <p>
              1.根據單位需求利用Java配合Enovia PLM架構制定修改簽核流程及表單資料
            </p>
            <p>2.透過JSP並利用EChart呈現圖形化資料，便於主管管控項目進度</p>
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
            <h2>MES(數據採集)</h2>
          </div>
          <div class="body">
            <p>
              收集整理生產線上PLC點位資料並拋轉回鼎捷MES系統做使用，省去額外設備商客製費用
            </p>
            <p class="skill-tag">
              <span>Virtual Basic</span>
              <span>MX Component</span>
            </p>
          </div>
        </div>

        <div class="exp-card exp-card--step3">
          <div class="head">
            <div class="number-box">
              <span>03</span>
            </div>
            <h2>供應商平台系統</h2>
          </div>
          <div class="body">
            <p>改善原公司內ERP不足(Oracle EBS)</p>
            <p>
              1.設計UI/UX並利用Vue開發前端電子化請購流程，便於使用者管理各單位預算和減少紙本印刷
            </p>
            <p>
              2.提供廠商交貨系統，使用行動裝置讀寫條碼，藉由一單多物減少以往廠商及收貨人員多張單據處理繁雜的問題
            </p>
            <p>3.管理介面使用讓各使用者知道目前進度及尚未完成項目</p>
            <p class="skill-tag">
              <span>Vue</span>
              <span>Webpack</span>
              <span>.Net Core</span>
              <span>Oracle</span>
              <span>MySQL</span>
              <span>Android</span>
            </p>
          </div>
        </div>

        <div class="exp-card exp-card--step4">
          <div class="head">
            <div class="number-box">
              <span>04</span>
            </div>
            <h2>模具管理系統</h2>
          </div>
          <div class="body">
            <p>
              1.根據設計圖估算模具初值並比對各廠商報價，改善以往預計收益與實際有出入問題
            </p>
            <p>2.透過提供廠商統一進收貨平台改善以往各包商物流進度責任問題</p>
            <p class="skill-tag">
              <span>Vue</span>
              <span>Nuxt</span>
              <span>.Net5</span>
              <span>Oracle</span>
              <span>SQL Server</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "WorkTimeline",
  data() {
    return {
      cards: [
        {
          id: 0,
          name: "Prima carta",
        },
        {
          id: 1,
          name: "Seconda carta",
        },
        {
          id: 2,
          name: "Terza carta",
        },
        {
          id: 3,
          name: "Quarta carta",
        },
      ],
    };
  },
  methods: {
    simpleFade(event) {
      console.log(event);
      // 淡出
      gsap.fromTo(
        event.target,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 0.35 }
      );
      // 移動
      // gsap.to(event.target, 1, { x: 600 });
    },
  },
  mounted() {
    gsap.registerPlugin(CSSPlugin, ScrollTrigger);

    const boxes = gsap.utils.toArray(".exp-card");
    boxes.forEach((box) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top center",
          toggleClass: "active",
          scrub: true
        },
      });
    });
  },
};
</script>
<style lang="scss" scoped>
@import "scss/WorkTimeline.scss";
</style>