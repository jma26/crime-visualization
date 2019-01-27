<template>
  <div id="landingpage">
    <div class="landingpage__logo-container">
      <img class="landingpage__image--logo" src="../assets/seacrime-logo.png" alt="SeaCrime - Crime Visualization of Seattle">
    </div>
    <section class="landingpage__section">
      <article class="landingpage__article">
        <h1 class="landingpage__headline">Introducing SeaCrime.</h1>
        <p class="landingpage__content">Visualizing Seattle's crime data in graphs</p>
        <input class="landingpage__button--green landingpage__button--desktop" type="button" value="Check it out!" v-on:click="toDashboardPage">
      </article>
      <input class="landingpage__button--green landingpage__button--mobile green-btn--mobile" type="button" value="Check it out!" v-on:click="toDashboardPage">
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

