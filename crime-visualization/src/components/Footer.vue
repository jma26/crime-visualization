<template>
  <div id="footer">
    <div class="footer__container">
      <footer class="footer__footer fixed-bottom">
        <ul class="footer__list">
          <li class="footer__list-item">
            <a href="https://github.com/jma26" rel="noopener noreferrer" alt="Jesse Ma's GitHub profile" target="_blank">
              <font-awesome-icon class="footer__icons" size="lg" :icon="['fab', 'github']" />
            </a>
          </li>
          <li class="footer__list-item">
            <a href="https://www.linkedin.com/in/jesse-ma-b2522b84/" rel="noopener noreferrer" alt="Jesse Ma's Linkedin profile" target="_blank">
              <font-awesome-icon class="footer__icons" size="lg" :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li class="footer__list-item">
            <a href="https://twitter.com/macode26" rel="noopener noreferrer" alt="Jesse Ma's Twitter profile" target="_blank">
              <font-awesome-icon class="footer__icons" size="lg" :icon="['fab', 'twitter']" />
            </a>
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
