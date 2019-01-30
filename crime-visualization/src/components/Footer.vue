<template>
  <div id="footer">
    <div class="footer__container">
      <footer class="footer__footer fixed-bottom">
        <ul class="footer__list">
          <li class="footer__list-item">
            <font-awesome-icon class="footer__icons" :icon="['fab', 'github']" />
          </li>
          <li class="footer__list-item">
            <font-awesome-icon class="footer__icons" :icon="['fab', 'linkedin']" />
          </li>
          <li class="footer__list-item">
            <font-awesome-icon class="footer__icons" :icon="['fab', 'twitter']" />
          </li>
          <li class="footer__list-item">
            <p class="footer__author">Jesse Ma</p> 
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import '../assets/scss/_bits.scss';
@import '../assets/scss/footer.scss';
</style>
