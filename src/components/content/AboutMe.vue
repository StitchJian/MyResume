<template>
  <section
    class="about-me about-me-bg d-flex justify-content-center align-items-center"
  >
    <div class="container">
      <div class="about-me-title">
        <h2>
          <strong class="">About me</strong>
        </h2>
      </div>
      <div class="row">
        <!-- head shot -->
        <div class="col-lg-6 col-12">
          <div class="about-me-image">
            <img
              src="@/assets/images/working-girl1.png"
              class="img-fluid"
              alt="working girl"
            />
          </div>
        </div>
        <div
          class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-start align-items-center"
        >
          <div >
            <p class="mt-4" >
              根據需求從無到有開發系統改善作業流程，使用主流前端框架Vue及Nuxt，利用axios與.Net
              core做前後端分離， 並在後端部分使用Entity
              Framework做ORM減少部分人員對Transact-SQL/Stored
              Procedure要求限制，以便管理專案!
            </p>
            <p class="mt-4">
              與需求部門討論需求及各階段使用者痛點改善，並定期聽取回饋使用者體驗，近期嘗試使用cypress做E2E測試，減少以往人工測試時間。
            </p>
            <p class="mt-4">
              空閒之餘參予社群社團吸收新知或著閱讀IT邦文章等等，精進改善自身技術與時俱進!
            </p>
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
@import "scss/AboutMe.scss";
</style>