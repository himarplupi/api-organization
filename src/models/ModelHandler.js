// Library
import Sequelize from 'sequelize';

class ModelHandler {
  constructor(server) {
    this.server = server;
  }

  connect(option) {

    try{
      this.db = new Sequelize(option);
      this.db.authenticate();
    } catch(err) {
      console.log('Database Error');
      return 'error';
    }

    return this.db;
  }
}

export default ModelHandler;