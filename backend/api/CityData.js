const axios = require('axios');

exports.default = {
  burglary() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/burglary/offense/agencies/WASPD0000/count',
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            burglary: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return 'Something went wrong retrieving burglary data';
    })
  },
  
  arson() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/arson/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            arson: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving arson city data');
    })
  },

  motor_vehicle_theft() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/motor-vehicle-theft/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            motor_vehicle_theft: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving motor vehicle theft city data');
    })
  },

  larceny() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/larceny/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            larceny: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving larceny city data');
    })
  },

  homicide() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/homicide/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            homicide: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving homicide city data');
    })
  },

  robbery() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/robbery/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            robbery: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving robbery city data');
    })
  },

  aggravated_assault() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/aggravated-assault/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            aggravated_assault: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving aggravated assault city data');
    })
  },

  rape() {
    return axios({
      method: 'GET',
      url: 'https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/rape/offense/agencies/WASPD0000/count'
      ,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            rape: arrayIncidentCount
        }
        response.data.results.map(item => {
            arrayIncidentCount.push(item.incident_count);
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving rape city data');
    })
  }
}
