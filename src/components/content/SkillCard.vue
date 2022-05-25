<template>
  <div >
    <div
      ref="card"
      class="skill-card"
      :style="cardStyle"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <h2><strong>Front-end</strong></h2>
        <ul>
          <li v-for="item in content" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillCard",
  props: {
    content: { type: Array, default: () => [] },
  },
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * -30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * 40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.clientX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.clientY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.card-container {
  display: flex;
}

.skill-card {
  color: var(--primary-color);
  margin: 10%;
  background-color: rgba(255, 255, 255, 0.8) !important;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0px 0.3rem 0.5rem rgba(0, 0, 0, 80%);
  transition: transform 0.3s ease 0s;

  transform: perspective(800px);
  transform-style: preserve-3d;

  ul {
    margin-top: 1rem;
    line-height: 1.8rem;
    font-size: 1.3rem;
    list-style: none;
  }
}
</style>