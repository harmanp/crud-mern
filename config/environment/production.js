'use strict';
let local = require('../local.env.js');
// Production specific configuration
// =================================
module.exports = {
     // Server IP
     ip: process.env.IP ||5000,
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     // Server port
     port: 5000,
     mongo: {
          uri: local.db.URI
     },
     selfURL: 'http://localhost',
     webApp: {
          url: "http://localhost:80"
     }
};