<template>
  <div id="motorVehicleTheft">
    <div class="apex__chart-container">
      <apexchart type="bar" height="850px" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MotorVehicleTheft',
  props:['crimeData'],
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
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
          ],
          labels: {
            style: {
              cssClass: 'motor_vehicle_theft-xaxis-label',
              fontSize: '16px'
            }
          }
        },
        yaxis: {
          title: {
            text: '% Crime Occurring',
            style: {
              cssClass: 'motor_vehicle_theft-yaxis-title',
              fontSize: '18px'
            }
          },
          labels: {
            style: {
              cssClass: 'motor_vehicle_theft-yaxis-label',
              fontSIze: '18px'
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
          data: [10, 20, 30, 40, 50, 60]
        }
      ]
    }
  },
  methods: {
    updateChart() {

      // Initialize
      var percentages = {};

      this.city = this.crimeData.city;
      this.state = this.crimeData.state;

      // Loop to compute percentages for crime index
      for (let i = 0; i < this.city.motor_vehicle_theft.length; i++) {
        percentages[i + 2012] = Math.floor(this.city.motor_vehicle_theft[i] / (this.city.motor_vehicle_theft[i] + this.state.motor_vehicle_theft[i]) * 100);
      }

      this.series = [{
        data: [
          percentages[2012],
          percentages[2013],
          percentages[2014],
          percentages[2015],
          percentages[2016],
          percentages[2017],
        ]
      }]
    }
  },
  created() {
    this.updateChart();
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/_bits.scss';
@import '../../assets/scss/crimeindexes.scss';
</style>
