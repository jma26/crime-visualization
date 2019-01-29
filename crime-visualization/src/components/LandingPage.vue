<template>
  <div id="landingpage">
    <section class="landingpage__section">
      <img class="landingpage__image--logo" src="../assets/seacrime-logo.png" alt="SeaCrime - Crime Visualization of Seattle">
      <article class="landingpage__article">
        <h1 class="landingpage__headline">Introducing <span class="headline--bold">SeaCrime</span></h1>
        <p class="landingpage__content">Seattle's crime data in visual graphs</p>
        <input class="landingpage__button" type="button" value="Check it out" v-on:click="toDashboardPage">
      </article>
    </section>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  methods: {
    toDashboardPage: function() {
      this.$router.push({ path: '/crime-indexes/city-crimes'});
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_bits.scss';
@import '../assets/scss/landingpage.scss';
</style>

