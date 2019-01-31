<template>
  <div id="homicide">
    <div class="apex__chart-container">
      <apexchart type="bar" height="850px" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homicide',
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
              cssClass: 'homicide-xaxis-label',
              fontSize: '16px'
            }
          }
        },
        yaxis: {
          title: {
            text: '% Crime Occurring',
            style: {
              cssClass: 'homicide-yaxis-title',
              fontSize: '18px'
            }
          },
          labels: {
            style: {
              cssClass: 'homicide-yaxis-label',
              fontSize: '18px'
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
      for (let i = 0; i < this.city.homicide.length; i++) {
        percentages[i + 2012] = Math.floor(this.city.homicide[i] / (this.city.homicide[i] + this.state.homicide[i]) * 100);
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
