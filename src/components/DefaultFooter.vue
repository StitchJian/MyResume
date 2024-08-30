<template>
  <div>
    <section>
      <div class="footer">
        <h2>
          <strong>CONTACT</strong>
        </h2>
        <div><a href="https://github.com/StitchJian"><i class="fa fa-github" /></a></div>
        <div><a href="mailto:bellea18723@gmail.com"><i class="fa fa-envelope-square" /></a></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "DefaultFooter",
};
</script>
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
</style>
<style lang="scss" scoped>
.footer {
  text-align: center;
  color: var(--white-color);
  background-image: linear-gradient(
      0,
      var(--secondary-color) 5%,
      var(--primary-color) 64%
    ),
    url("~@/assets/images/image1.jpg");
  clip-path: polygon(0 31%, 100% 0%, 100% 100%, 0% 100%);
  background-size: cover;
  background-position: 0 10%;
  h2 {
    padding-top: 3rem;
  }

  a{
    color: var(--white-color);
    text-decoration: none;
  }

  div {
    display: inline-block;
    padding: 0rem 1rem;
    font-size: 10vmin;
    cursor: pointer;
  }
}
</style>
