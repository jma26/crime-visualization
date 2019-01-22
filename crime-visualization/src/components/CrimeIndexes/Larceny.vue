<template>
  <div id="larceny">
    <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'Larceny',
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
          ]
        },
        yaxis: {
          title: {
            text: '% Crime Occurring',
            style: {
              cssClass: 'larceny-yaxis-title'
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
      console.log('Updating series...');

      // Initialize
      var percentages = {};

      this.city = this.crimeData.city;
      this.state = this.crimeData.state;

      // Length of incidents of 6 years
      // Loop to compute percentages for each crime index
      for (let i = 0; i < 6; i++) {
        percentages['year_', i] = Math.floor((this.city.larceny_count[i]) / (this.city.larceny_count[i] + this.state.larceny_count[i]));
      }
      console.log(percentages);

      this.series = [{
        data: [
          percentages.year_0,
          percentages.year_1,
          percentages.year_2,
          percentages.year_3,
          percentages.year_4,
          percentages.year_5,
        ]
      }]

    }
  },
  created() {
    this.updateChart();
  }
}
</script>
