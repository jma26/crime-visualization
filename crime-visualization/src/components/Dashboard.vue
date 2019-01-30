<template>
  <div id="dashboard">
    <Header />
    <router-view :crimeData="crimeData"></router-view>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      crimeData: {
        city: {},
        state: {}
      }
    }
  },
  methods: {
    getCityData() {
      axios.get('/citydata').then(response => {
        let data = response.data.data;
        if (response.status === 200 && response.data.success === true) {
          // Loop over length
          for (let i = 0; i < data.length; i++) {
            // Loop over properties
            for (let prop in data[i]) {
              // Set reactive properties to object
              this.$set(this.crimeData.city, prop, data[i][prop]);
            }
          }
        }
      })
    },
    getStateData() {
      axios.get('/statedata').then(response => {
        let data = response.data.data;
        if (response.status === 200 && response.data.success === true) {
          // Loop over length
          for (let i = 0; i < data.length; i++) {
            // Loop over properties
            for (let prop in data[i]) {
              // Set reactive properties to object
              this.$set(this.crimeData.state, prop, data[i][prop]);
            }
          }
        }
      })
    }
  },
  created() {
    this.getCityData();
    this.getStateData();
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_bits.scss';
@import '../assets/scss/dashboard.scss';
</style>
