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
            <h2>Enovia PLM</h2>
          </div>
          <div class="body">
            <p>
              1.根據單位需求利用Java配合Enovia PLM架構制定修改簽核流程及表單資料
            </p>
            <p>2.透過JSP並利用EChart呈現圖形化資料，便於主管管控項目進度</p>
            <p class="text-end" @click="showModal('A')">
              <i>更多...</i>
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
            <h2>MES(數據採集)</h2>
          </div>
          <div class="body">
            <p>
              收集整理生產線上PLC點位資料並拋轉回鼎捷MES系統做使用，省去額外設備商客製費用
            </p>
            <p class="text-end" @click="showModal('B')">
              <i>更多...</i>
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
            <h2>SRM供應商平台系統</h2>
          </div>
          <div class="body">
            <p>改善原公司內ERP不足(Oracle EBS)</p>
            <p>
              1.利用Vue開發前端E化請購流程，減少紙本印刷和採購、倉管、財務間的溝通成本
            </p>
            <p>
              2.提供廠商交貨系統，使用行動裝置讀寫條碼，藉由一單多物減少以往廠商及收貨人員多張單據處理問題(改善減少70%往常作業時間)
            </p>
            <p>
              3.管理介面使用讓各使用者知道目前進度及尚未完成項目，減少過往返查情況
            </p>
            <p class="text-end" @click="showModal('C')">
              <i>更多...</i>
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
            <h2>工裝進度追蹤系統</h2>
          </div>
          <div class="body">
            <p>
              1.因應PLM專案模夾量治具追蹤長期手工整理，故串接plm&與工機部門舊有VB6系統資料
            </p>
            <p>2.因應license U數限制，使用webservice將資料接出讓其他使用者也可查看管理</p>
            <p class="text-end" @click="showModal('D')">
              <i>更多...</i>
            </p>
            <p class="skill-tag">
              <span>Vue</span>
              <span>.Net6</span>
              <span>Java</span>
              <span>SQL Server</span>
              <span>Azure Devops</span>
              <span>Nuit</span>
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