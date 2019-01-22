import Vue from 'vue';
import VueRouter from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import CityRisk from './components/CityRisk.vue';
import Dashboard from './components/Dashboard.vue';
import AggravatedAssault from './components/CrimeIndexes/AggravatedAssault.vue';
import Arson from './components/CrimeIndexes/Arson.vue';
import Burglary from './components/CrimeIndexes/Burglary.vue';
import Larceny from './components/CrimeIndexes/Larceny.vue';
import MotorVehicleTheft from './components/CrimeIndexes/MotorVehicleTheft.vue';
import Rape from './components/CrimeIndexes/Rape.vue';
import Robbery from './components/CrimeIndexes/Robbery.vue';
import Homicide from './components/CrimeIndexes/Homicide.vue';

library.add(faGithub, faLinkedin, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

Vue.use(VueRouter, VueApexCharts);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/crime-indexes', component: Dashboard,
    children: [
      {
        path: 'city-crimes',
        component: CityRisk
      },
      {
        path: 'aggravated-assault',
        component: AggravatedAssault
      },
      {
        path: 'arson',
        component: Arson
      },
      {
        path: 'larceny',
        component: Larceny
      },
      {
        path: 'motor-vehicle-theft',
        component: MotorVehicleTheft
      },
      {
        path: 'rape',
        component: Rape
      },
      {
        path: 'robbery',
        component: Robbery
      },
      {
        path: 'burglary',
        component: Burglary
      },
      {
        path: 'homicide',
        component: Homicide
      }
    ]
  }
]

const router = new VueRouter({
    // Short for routes: routes
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
