<template>
  <section>
    <div class="about">
      <h2>
        <strong class="">About me</strong>
      </h2>
      <div class="row justify-content-center">
        <div class="col col-lg-4 col-md-8 col-10">
          <img src="~@/assets/images/mugshot.jpg" class="photo" />
        </div>
        <div class="col col-lg-6 col-md-8 col-8">
          <h4><strong>尋求新知 挑戰自我</strong></h4>
          <p>
            根據需求從無到有開發系統改善作業流程，使用主流前端框架Vue及Nuxt，利用axios與.Net
            core做前後端分離， 並在後端部分使用Entity
            Framework做ORM減少部分人員對Transact-SQL/Stored
            Procedure要求限制，以便管理專案!
          </p>
          <p>
            與需求部門討論需求及各階段使用者痛點改善，並定期聽取回饋使用者體驗，近期嘗試使用cypress做E2E測試，減少以往人工測試時間。
          </p>
          <p>
            空閒之餘參予社群社團吸收新知或著閱讀IT邦文章等等，精進改善自身技術與時俱進!
          </p>
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
@import "../../assets/scss/minxin.scss";
.about {
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