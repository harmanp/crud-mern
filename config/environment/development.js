'use strict';
let local = require('../local.env.js');
// Development specific configuration
// ==================================
module.exports = {
     selfURL: 'https://mern-crud21.herokuapp.com/',
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     port: 8001,
     ip: '0.0.0.0',
     seedDB: true,
     webApp: {
        url: "https://mern-crud21.herokuapp.com/"
     }
};