const { setConfig, startFetch } = require('./start');

setConfig({
    flagsBase: 'https://covidstat.info/static/flags/',
    redis: {
        host: "167.99.74.189",
        password: "PzKUE7Sv2KSnBYaPSTG2gFc7",
        port: "6739"
    } })
startFetch();