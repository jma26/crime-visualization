<template>
  <div id="cityrisk">
    <div class="cityrisk__chart-container">
      <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityrisk',
  props: ['crimeData'],
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'national-apex-charts'
        },
        colors: ['#879DAE'],
        plotOptions: {
          bar: {
            columnWidth: '50%',
          }
        },
        xaxis: {
          categories: [
            'Burglary',
            'Arson',
            'Motor Vehicle Theft',
            'Larceny',
            'Homicide',
            'Robbery',
            'Aggravated Assault',
            'Rape'
          ]
        },
        yaxis: {
          title: {
            text: '% Crime Occurring',
            style: {
              cssClass: 'cityRisk-yaxis-title'
            }
          }
        },
        dataLabels: {
          enabled: false
        }
      },

      series: [
        {
          name: 'Likelihood of Crime Occuring in Percentages',
          data: [10, 20, 30, 40, 50, 60, 70, 80]
        }
      ]
    }
  },
  methods: {
    updateChart() {
      console.log('Updating series.....');

      // Initialize
      var seattleIncidentPercentages = {};
      const city_crime_indexes = {};
      const state_crime_indexes = {};

      this.city = this.crimeData.city;
      this.state = this.crimeData.state;

      // Sum up total for each crime index in city
      for (let crimeIndex in this.city) {
        city_crime_indexes[crimeIndex] = this.city[crimeIndex].reduce((a, b) => a + b, 0);
      }

      // Sum up total for each crime index in state
      for (let crimeIndex in this.state) {
        state_crime_indexes[crimeIndex] = this.state[crimeIndex].reduce((a, b) => a + b, 0);
      }

      // Calculate likelihood of crime occurring, city / (city + state)
      for (let crimeIndex in city_crime_indexes) {
        seattleIncidentPercentages[crimeIndex] = Math.round(city_crime_indexes[crimeIndex] / (city_crime_indexes[crimeIndex] +  state_crime_indexes[crimeIndex]) * 100);
      }

      console.log(seattleIncidentPercentages);

      this.series = [{
        data: [
          seattleIncidentPercentages.burglary, 
          seattleIncidentPercentages.arson,
          seattleIncidentPercentages.motor_vehicle_theft,
          seattleIncidentPercentages.larceny,
          seattleIncidentPercentages.homicide,
          seattleIncidentPercentages.robbery,
          seattleIncidentPercentages.aggravated_assault,
          seattleIncidentPercentages.rape
        ]
      }]
    },
  },
  watch: {
    crimeData: {
      deep: true,
      handler() {
        this.updateChart();
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_bits.scss';
@import '../assets/scss/cityrisk.scss';
</style>
