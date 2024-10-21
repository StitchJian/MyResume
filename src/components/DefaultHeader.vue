<template>
  <section
    class="header header-bg d-flex justify-content-center align-items-center"
  >
    <div class="container">
      <div class="row">
        <!-- head shot -->
        <div class="col-lg-6 col-12">
          <div class="header-image">
            <img
              src="@/assets/images/working.png"
              class="img-fluid"
              alt="working girl"
            />
          </div>
        </div>
        <div
          class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h1 class="header-cursor anim-typewriter">Hi, I'm CHIH YING.</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DefaultHeader",
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/minxin.scss";

* {
  padding: 0;
  margin: 0;
}

.header {
  position: relative;
  padding-top: 1.5rem !important;
  padding-bottom: 2rem !important;
  overflow: hidden;

  font-weight: bold;
  text-align: center;
  h1 {
    color: var(--primary-color);
    @include mq-lg {
      color: var(--white-color);
      margin-top: -5.1rem;
      font-size: 4rem;
    }
    padding: 1.5rem;
  }
  h1::before {
    content: " ";
    animation: line-top 2s 2.5s forwards 1;
    @include mq-lg {
      animation: line-top-lg 2s 2.5s forwards 1;
    }
  }
  h1::after {
    content: " ";
    animation: line-bottom 2s 2.5s forwards 1;
    @include mq-lg {
      animation: line-bottom-lg 2s 2.5s forwards 1;
    }
  }
}

.header-bg {
  background-image: linear-gradient(
      -170deg,
      var(--secondary-color) 5%,
      var(--primary-color) 64%,
      var(--white-color) 30%
    ),
    url("~@/assets/images/image1.jpg");
  background-size: cover;
  background-position: 0 10%;
}

.header-image {
  position: relative;
  padding-bottom: 2rem;
}

.header-cursor {
  position: relative;
  top: 50%;
  width: 100%;
  margin: 0 auto;
  @include mq-lg {
    border-right: 2px solid rgba(255, 255, 255, 0.75);
  }
  @include mq-md {
    border-right: 2px solid var(--primary-color);
  }
  @include mq-xs {
    border-right: 2px solid var(--primary-color);
  }
  @include mq-sm {
    border-right: 2px solid var(--primary-color);
  }
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.anim-typewriter {
  width: 0;
  animation: typewriter 4s steps(44) 0.5s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite none ;
}

@keyframes typewriter {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}

@keyframes blinkTextCursor {
  0% {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  100% {
    border-right-color: transparent;
  }
}

@keyframes line-top {
  0% {
  }
  100% {
    content: " ";
    position: absolute;
    width: 40%;
    height: 0.1rem;
    z-index: 3000;
    top: -5%;
    left: -5%;
    padding-top: 1rem;
    border-bottom: 2px solid var(--primary-color);
  }
}

@keyframes line-bottom {
  0% {
  }
  100% {
    content: " ";
    position: absolute;
    width: 60%;
    height: 0.1rem;
    z-index: 3000;
    bottom: -10%;
    right: 0;
    padding-bottom: 1rem;
    border-top: 2px solid var(--primary-color);
  }
}

@keyframes line-top-lg {
  0% {
  }
  100% {
    content: " ";
    position: absolute;
    width: 40%;
    height: 0.1rem;
    z-index: 3000;
    top: -5%;
    left: -5%;
    padding-top: 1rem;
    border-bottom: 2px solid var(--white-color);
  }
}

@keyframes line-bottom-lg {
  0% {
  }
  100% {
    content: " ";
    position: absolute;
    width: 60%;
    z-index: 3000;
    bottom: -10%;
    right: 0;
    padding-bottom: 1rem;
    border-top: 2px solid var(--white-color);
  }
}
</style>