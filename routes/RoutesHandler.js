// App
const Kabinet = require("./kabinet/Handler.js");
const Departments = require('./department/Handler.js');
const Proker = require('./proker/Handler.js');

class RoutesHandler{
  constructor(server, api) {
    new Kabinet(server, api);
    new Departments(server, api);
    new Proker(server, api);
  }
};

module.exports = RoutesHandler;