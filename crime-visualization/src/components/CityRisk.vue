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

      // City total
      var total_city_burglary_count = 0
      var total_city_arson_count = 0;
      var total_city_rape_count = 0;
      var total_city_robbery_count = 0;
      var total_city_aggravated_assault_count = 0;
      var total_city_homicide_count = 0;
      var total_city_larceny_count = 0;
      var total_city_motor_vehicle_theft_count = 0;
      
      // City + State total
      var total_burglary_count = 0
      var total_arson_count = 0;
      var total_rape_count = 0;
      var total_robbery_count = 0;
      var total_aggravated_assault_count = 0;
      var total_homicide_count = 0;
      var total_larceny_count = 0;
      var total_motor_vehicle_theft_count = 0;
      var total_burglary_count = 0;

      this.city = this.crimeData.city;
      this.state = this.crimeData.state;

      // Length of incidents of 6 years
      // Loop to compute percentages for each crime index
      for (let i = 0; i < 6; i++) {
        // Burglary
        total_city_burglary_count += this.city.burglary_count[i];
        total_burglary_count += (this.city.burglary_count[i] + this.state.burglary_count[i]);

        // Arson
        total_city_arson_count += this.city.arson_count[i];
        total_arson_count += (this.city.arson_count[i] + this.state.arson_count[i]);

        // Rape
        total_city_rape_count += this.city.rape_count[i];
        total_rape_count += (this.city.rape_count[i] + this.state.rape_count[i]);

        // Robbery
        total_city_robbery_count += this.city.robbery_count[i];
        total_robbery_count += (this.city.robbery_count[i] + this.state.robbery_count[i]);

        // Aggravated Assault
        total_city_aggravated_assault_count += this.city.aggravated_assault_count[i];
        total_aggravated_assault_count += (this.city.aggravated_assault_count[i] + this.state.aggravated_assault_count[i]);
        
        // Homicide
        total_city_homicide_count += this.city.homicide_count[i];
        total_homicide_count += (this.city.homicide_count[i] + this.state.homicide_count[i]);

        // Larceny
        total_city_larceny_count += this.city.larceny_count[i];
        total_larceny_count += (this.city.larceny_count[i] + this.state.larceny_count[i]);

        // Motor Vehicle Theft
        total_city_motor_vehicle_theft_count += this.city.motor_vehicle_theft_count[i];
        total_motor_vehicle_theft_count += (this.city.motor_vehicle_theft_count[i] + this.state.motor_vehicle_theft_count[i]);
      }

      seattleIncidentPercentages.burglary = Math.floor((total_city_burglary_count / total_burglary_count) * 100);

      seattleIncidentPercentages.arson = Math.floor((total_city_arson_count / total_arson_count) * 100);

      seattleIncidentPercentages.motor_vehicle_theft = Math.floor((total_city_motor_vehicle_theft_count / total_motor_vehicle_theft_count) * 100);

      seattleIncidentPercentages.larceny = Math.floor((total_city_larceny_count / total_larceny_count) * 100);

      seattleIncidentPercentages.homicide = Math.floor((total_city_homicide_count / total_homicide_count) * 100);

      seattleIncidentPercentages.robbery = Math.floor((total_city_robbery_count / total_robbery_count) * 100);

      seattleIncidentPercentages.aggravated_assault = Math.floor((total_city_aggravated_assault_count / total_aggravated_assault_count) * 100);

      seattleIncidentPercentages.rape = Math.floor((total_city_rape_count / total_rape_count) * 100); 

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
    checkProperties() {
      Promise.all([
        this.checkCityProperties(this.crimeData.city),
        this.checkStateProperties(this.crimeData.state)
      ]).then(values => {
        console.log(values);
        if (values[0] === true && values[1] === true) {
          console.log('City and state datas are updated');
          this.updateChart();
        }
      }).catch(error => {
        console.log('City and state datas are null:', error);
      })
    },
    checkCityProperties(city) {
      return new Promise(function(resolve, reject) {
        for (let key in city) {
          if (city[key] === null) {
            reject('City properties are null');
          }
        }
        resolve(true);
      })
    },
    checkStateProperties(state) {
      return new Promise(function(resolve, reject) {
        for (let key in state) {
          if (state[key] === null) {
            reject('State properties are null');
          }
        }
        resolve(true);
      })
    }
  },
  watch: {
    crimeData: {
      deep: true,
      handler() {
        this.updateChart();
      }
    }
  },
  created() {
    this.checkProperties();
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_bits.scss';
@import '../assets/scss/cityrisk.scss';
</style>
