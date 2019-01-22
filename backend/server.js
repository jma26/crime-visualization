if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const cityAPI = require('./api/CityData.js').default;
const stateAPI = require('./api/StateData.js').default;

const app = express();

// Handle cors
app.use(cors());
// Handle requested data with body-parser, turn on object nesting
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.get('/citydata', (req, res) => {
    axios.all([
        cityAPI.burglary(), cityAPI.arson(), cityAPI.motor_vehicle_theft(), cityAPI.larceny(), cityAPI.homicide(), cityAPI.robbery(), cityAPI.aggravated_assault(), cityAPI.rape()
    ]).then(axios.spread((...args) => {
        // Successful data response
        res.send({
            status: 200,
            success: true,
            data: args
        });
    })).catch(error => {
        // Request made and server responded with status code
        if (error.response) {
            res.send({
                status: error.response.status,
                success: false,
                data: error.response.data
            })
        // Request was made but no response was received
        } else if (error.request) {
            res.send({
                success: false,
                data: error.request
            })
        // Error triggered in request settings
        } else {
            res.send({
                success: false,
                data: `Error: ${error.message}`
            })
        }
    });
})

app.get('/statedata', (req, res) => {
    axios.all([
        stateAPI.burglary(), stateAPI.arson(), stateAPI.motor_vehicle_theft(), stateAPI.larceny(), stateAPI.homicide(), stateAPI.robbery(), stateAPI.aggravated_assault(), stateAPI.rape()
    ]).then(axios.spread((...args) => {
        // Successful data response
        res.send({
            status: 200,
            success: true,
            data: args
        });
    })).catch(error => {
        // Request made and server responded with status code
        if (error.response) {
            res.send({
                status: error.response.status,
                success: false,
                data: error.response.data
            })
        // Request was made but no response was received
        } else if (error.request) {
            res.send({
                success: false,
                data: error.request
            })
        // Error triggered in request settings
        } else {
            res.send({
                success: false,
                data: `Error: ${error.message}`
            })
        }
    });
})

app.listen(port, () => {
    console.log('Server live on port', port);
})