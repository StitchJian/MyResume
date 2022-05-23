<template>
  <div>
    <section id="timeline">
      <div class="text-center mb-3">
        <h1 @click="simpleFade">Experience</h1>
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
    <section class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="card"
            v-for="card in cards"
            :key="card.id"
            @click="simpleFade"
          >
            <div class="card-inner">
              <div class="card-name">{{ card.name }}</div>
            </div>
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
gsap.registerPlugin(CSSPlugin, ScrollTrigger);
gsap.to(".exp-card", {
  scrollTrigger: ".exp-card",
  autoAlpha: 0,
  duration: 0.35,
});
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
};
</script>
<style lang="scss" scoped>
/* Media Queries */
// #region RWD
@mixin mq-xs {
  @media (min-width: 320px) {
    @content;
  }
}

@mixin mq-sm {
  @media (min-width: 480px) {
    @content;
  }
}

@mixin mq-md {
  @media (min-width: 720px) {
    @content;
  }
}

@mixin mq-lg {
  @media (min-width: 1000px) {
    @content;
  }
}
// #endregion

// #region variable
$background: #ffffff;
$box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
$border: 1px solid rgba(191, 191, 191, 0.4);
$items: 4;
$rows: ceil($items/2);

/* Card sizing */

$card-height: 225px;
$card-width: 450px;
$inner-margin: 20px;
$number-size: 35px;
$stagger: 180px;
$outer-margin: 90px;
$marker-size: 9px;

/* Colors */

$steps: #46b8e9;
$colors: #9c88d5, #d588c1, #d59c88, #c1d588;
$timeline: #ffffff;

/* Calculations */

$container-height: $rows * ($card-height + $outer-margin) + $stagger;
$container-width: $card-width * 2 + $outer-margin * 3;
$head-height: $number-size + 50;
$body-height: $card-height - $head-height;
$marker-dist: $card-width + $outer-margin/2 - $marker-size/2;

/* Placeholders */
// #endregion

@include mq-lg {
  %arrow {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
  %marker {
    position: absolute;
    content: "";
    width: $marker-size;
    height: $marker-size;
    background-color: $timeline;
    border-radius: $marker-size;
    box-shadow: 0px 0px 2px 8px $background;
  }
}

/* Some Cool Stuff */

$counter: $items - $rows + 2;
@for $i from 1 through $rows {
  .exp-card:nth-child(#{$i*2-1}) {
    order: $i;
  }
  .exp-card:nth-child(#{$i*2}) {
    order: $counter;
  }
  $counter: $counter + 1;
}

/* Border Box */

* {
  box-sizing: border-box;
}

#timeline {
  background: $background;
  h1 {
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 20px;
    background-color: var(--primary-color);
    color: var(--white-color);
    display: inline;
    padding: 5px;
    font-weight: bold;
  }
  .exp-card-wrapper {
    position: relative;
    margin: auto;
    @include mq-lg {
      display: flex;
      flex-flow: column wrap;
      width: $container-width;
      height: $container-height;
      margin: 0 auto;
    }
    &::after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: $border;
      @include mq-lg {
        border-left: 1px solid $timeline;
      }
    }
  }
  .exp-card {
    position: relative;
    display: block;
    margin: 10px auto 80px;
    max-width: 94%;
    z-index: 2;
    @include mq-sm {
      max-width: 60%;
      box-shadow: $box-shadow;
    }
    @include mq-md {
      max-width: 40%;
    }
    @include mq-lg {
      max-width: $card-width;
      height: $card-height;
      margin: $outer-margin;
      margin-top: $outer-margin/2;
      margin-bottom: $outer-margin/2;
      &:nth-child(odd) {
        margin-right: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-left-width: 15px;
          border-left-style: solid;
          left: 100%;
        }
        .head::before {
          @extend %marker;
          left: $marker-dist + 1;
        }
      }
      &:nth-child(even) {
        margin-left: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-right-width: 15px;
          border-right-style: solid;
          right: 100%;
        }
        .head::before {
          @extend %marker;
          right: $marker-dist - 1;
        }
      }
      &:nth-child(2) {
        margin-top: $stagger;
      }
    }
    .head {
      position: relative;
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 400;
      .number-box {
        display: inline;
        float: left;
        margin: $inner-margin;
        padding: 10px;
        font-size: $number-size;
        line-height: $number-size;
        font-weight: 600;
        background: rgba(0, 0, 0, 0.17);
      }
      h2 {
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 1000;
        letter-spacing: 2px;
        margin: 0;
        padding-bottom: 5px;
        line-height: 1rem;
        @include mq-sm {
          font-size: 165%;
          line-height: 1.2rem;
        }
        span {
          display: block;
          font-size: 0.6rem;
          margin: 0;
          @include mq-sm {
            font-size: 0.8rem;
          }
        }
      }
      h2:after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        margin: 10px 0;
        background-color: #fff;
        transition: width 0.3s 0.3s;
      }
    }
    .body {
      background: #fff;
      border: $border;
      border-top: 0;
      padding: $inner-margin;
      color: gray;
      @include mq-lg {
        min-height: $body-height;
      }
      position: relative;
      p {
        font-size: 14px;
        line-height: 2rem;
        margin-bottom: $inner-margin;
      }
      img {
        display: block;
        width: 100%;
      }

      .skill-tag {
        position: absolute;
        right: 5px;
        display: flex;
        flex-wrap: wrap;
        @include mq-md {
          bottom: -0.8rem;
        }
        span {
          border: 0.1rem solid var(--secondary-color);
          margin: 0.1rem;
          padding: 0.1rem 0.7rem;
          border-radius: 5rem;
          font-size: 0.7rem;
          color: var(--secondary-color);
          font-weight: bold;
        }
      }
    }
    @for $i from 1 through $items {
      &--step#{$i} {
        $color: nth($colors, ((($i - 1) % 4) + 1));
        background-color: $color;
        .head::after {
          border-color: $color;
        }
      }
    }
  }
  .exp-card:hover {
    transform: scale(1.09);
    box-shadow: 0px 0px 25px 50px rgba(0, 0, 0, 0.08) inset;
    transition: 700ms;
    h2:after {
      width: 100%;
    }
  }
}
</style>