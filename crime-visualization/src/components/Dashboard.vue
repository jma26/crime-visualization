<template>
  <div id="dashboard">
    <Header />
    <router-view :crimeData="crimeData"></router-view>
    <Footer />
  </div>
</template>

<script>

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
        city: {
          burglary_count: null,
          arson_count: null,
          motor_vehicle_theft_count: null,
          larceny_count: null,
          homicide_count: null,
          robbery_count: null,
          aggravated_assault_count: null,
          rape_count: null
        },
        state: {
          burglary_count: null,
          arson_count: null,
          motor_vehicle_theft_count: null,
          larceny_count: null,
          homicide_count: null,
          robbery_count: null,
          aggravated_assault_count: null,
          rape_count: null,
        }
      }
    }
  },
  methods: {
    Test() {
      axios.get('/').then((data) => {
        console.log(data);
      })
      console.log('Hi');
    },
    getCityData: async function() {

      const CityApiPromises = Promise.all([await CityAPI.burglary(), await CityAPI.arson(), await CityAPI.motor_vehicle_theft(), await CityAPI.larceny(), await CityAPI.homicide(), await CityAPI.robbery(), await CityAPI.aggravated_assault(), await CityAPI.rape()])

      this.crimeData.city.burglary_count, this.crimeData.city.arson_count, this.crimeData.city.motor_vehicle_theft_count, this.crimeData.city.larceny_count, this.crimeData.city.homicide_count, this.crimeData.city.robbery_count, this.crimeData.city.aggravated_assault_count, this.crimeData.city.rape_count = await CityApiPromises;
    },
    getStateData: async function() {

      const StateApiPromises = Promise.all([await StateAPI.burglary(), await StateAPI.arson(), await StateAPI.motor_vehicle_theft(), await StateAPI.larceny(), await StateAPI.homicide(), await StateAPI.robbery(), await StateAPI.aggravated_assault(), await StateAPI.rape()])

      this.crimeData.state.burglary_count, this.crimeData.state.arson_count, this.crimeData.state.motor_vehicle_theft_count, this.crimeData.state.larceny_count, this.crimeData.state.homicide_count, this.crimeData.state.robbery_count, this.crimeData.state.aggravated_assault_count, this.crimeData.state.rape_count = await StateApiPromises;
    }
  },
  created() {
    this.getCityData();
    this.getStateData();
    this.Test();
  }
}
</script>
