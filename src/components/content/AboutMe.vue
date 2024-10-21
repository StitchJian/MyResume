<template>
  <section>
    <div class="about">
      <h2>
        <strong>About me</strong>
      </h2>
      <div class="row justify-content-center">
        <div class="col col-lg-4 col-md-8 col-10">
          <img src="~@/assets/images/mugshot.jpg" class="photo" />
        </div>
        <div class="col col-lg-6 col-md-8 col-8">
          <div>{{ $t('about.title') }}</div>
          <p>
            {{ $t('about.contentPart1') }}
          </p>
          <p>
            {{ $t('about.contentPart2') }}
          </p>
          <p>
            {{ $t('about.contentPart3') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutMe",
  mounted() {
    console.log(this.$t)
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/minxin.scss";

.about {
  overflow-x: hidden;
  text-align: center;
  color: rgb(119, 119, 119);

  h2 {
    background-color: var(--primary-color);
    color: var(--white-color);
    display: inline-block;
    padding: 5px 10px;
    margin: 1.5rem 0;
  }

  p {
    text-align: start;
    line-height: 1.6rem;
    padding: 1% 0%;
  }
}

.photo {
  width: 45%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease 0s;
  border-radius: 50%;
  margin: 1rem 0;

  @include mq-lg {
    margin-bottom: 8rem;
    border-radius: 0%;
  }
}
</style>