<template>
  <section
    class="about-me about-me-bg d-flex justify-content-center align-items-center"
  >
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-start align-items-center"
        >
          <div>
            <h2 class="about-me-title" data-aos="fade-up">
              <strong class="">About me</strong>
            </h2>
            <p class="mt-4" style="word-wrap: break-word">
              根據需求從無到有開發系統改善作業流程，使用主流前端框架Vue及Nuxt，利用axios與.net
              core做前後端分離， 並在後端部分使用Entity
              Framework做ORM減少部分人員對Transact-SQL/Stored
              Procedure要求限制，以便管理專案!
            </p>
            <p class="mt-4">
              與需求部門討論流程需求及各階段使用者痛點改善，並定期聽取回饋使用者體驗，近期嘗試使用cypress做E2E測試，減少以往人工測試時間。
            </p>
            <p class="mt-4">
              空閒之餘參予社群社團吸收新知或著閱讀IT邦文章等等，精進改善自身技術與時俱進!
            </p>
          </div>
        </div>
        <!-- head shot -->
        <div class="col-lg-6 col-12">
          <div class="about-me-image" data-aos="fade-up" data-aos-delay="300">
            <img
              src="@/assets/images/working-girl.png"
              class="img-fluid"
              alt="working girl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.area-region {
  padding: 20rem 10rem;
  background-image: linear-gradient(
      to right bottom,
      var(--secondary-color),
      var(--primary-color)
    ),
    url(https://yipeechen.github.io/resume/images/header-bg-min.jpg);
  background-size: cover;
  transform: skewY(7deg);
  margin-top: 10rem;
}

.about-me {
  position: relative;
  padding-top: 3.5rem !important;
  padding-bottom: 2rem !important;
  overflow: hidden;
  color: var(--compared-color);
  padding: 5px;
  font-weight: bold;
}

.about-me-bg {
  background: linear-gradient(
    170deg,
    var(--primary-color) 64%,
    var(--white-color) 30%
  );
}

.about-me-image {
  position: relative;
  top: 2em;
}

.about-me-title {
  background-color: var(--compared-color);
  color: var(--primary-color);
  display: inline-block;
  padding: 5px;
}
</style>