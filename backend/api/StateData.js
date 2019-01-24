const axios = require('axios');

exports.default = {
  burglary() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/burglary/offense/states/WA/count`,
      params: {
        api_key: process.env.GOV_API_KEY
      }
    }).then(response => {
        let arrayIncidentCount = []
        let crimeIndex = {
            burglary: arrayIncidentCount
        }
        response.data.results.map(item => {
            if (item.data_year >= 2012) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving burglary state data');
    })
  },
  
  arson() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/arson/offense/states/WA/count`
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
            if (item.data_year >= 2012 && item.data_year <= 2017) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving arson state data');
    })
  },

  motor_vehicle_theft() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/motor-vehicle-theft/offense/states/WA/count`
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
            if (item.data_year >= 2012 && item.data_year <= 2017) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
      return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving motor vehicle theft state data');
    })
  },

  larceny() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/larceny/offense/states/WA/count`
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
            if (item.data_year >= 2012 && item.data_year <= 2017) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
      return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving larceny state data');
    })
  },

  homicide() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/homicide/offense/states/WA/count`
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
            if (item.data_year >= 2012 && item.data_year <= 2017) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving homicide state data');
    })
  },

  robbery() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/robbery/offense/states/WA/count`
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
            if (item.data_year >= 2012 && item.data_year <= 2017) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving robbery state data');
    })
  },

  aggravated_assault() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/aggravated-assault/offense/states/WA/count`
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
            if (item.data_year >= 2012 && item.data_year <= 2017) {
            arrayIncidentCount.push(item.incident_count);
            }
        })
        return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving aggravated assault state data');
    })
  },

  rape() {
    return axios({
      method: 'GET',
      url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/rape/offense/states/WA/count`
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
        if (item.data_year >= 2012 && item.data_year <= 2017) {
          arrayIncidentCount.push(item.incident_count);
        }
      })
      return Promise.resolve(crimeIndex);
    }).catch(error => {
        return Promise.reject('Something went wrong retrieving rape state data');
    })
  }
}
