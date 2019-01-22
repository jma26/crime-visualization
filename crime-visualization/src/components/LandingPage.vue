<template>
  <div id="landingpage">
    <div class="landingpage__logo-container">
      <img src="../assets/seacrime-logo.png" alt="SeaCrime - Crime Visualization of Seattle">
    </div>
    <section class="landingpage__section">
      <article class="landingpage__article">
        <p class="landingpage__content">
          Introducing SeaCrime, 
          <br>
          Seattle's Crime Visualization
          <!-- a new crime data visualization to how safe Seattle is -->
        </p>
        <!-- <p class="landingpage__content">Data provided by <a href="https://crime-data-explorer.fr.cloud.gov/" target="_blank">FBI's Uniform Crime Reporting (UCR) Program</a></p> -->
        <input class="landingpage__button--green landingpage__button--desktop" type="button" value="Check it out!" v-on:click="toDashboardPage">
      </article>
      <div class="landingpage__demo">
        <img src="https://via.placeholder.com/600" />
      </div>
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

