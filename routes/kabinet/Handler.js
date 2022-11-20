// App
const Create = require('./Create.js')
const GetAll = require('./GetAll.js')
const GetById = require('./GetById.js')
const Update = require('./Update.js')
const Delete = require('./Delete.js')

class Kabinet {
  constructor (server, api) {
    new Create(server, api)
    new GetAll(server, api)
    new GetById(server, api)
    new Update(server, api)
    new Delete(server, api)
  }
};

module.exports = Kabinet
