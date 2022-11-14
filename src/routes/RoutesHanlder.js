// App
import Kabinet from "./kabinet/Handler.js";
import Departments from './department/Handler.js';
import Proker from './proker/Handler.js'

class RoutesHandler{
  constructor(server, api) {
    new Kabinet(server, api);
    new Departments(server, api);
    new Proker(server, api);
  }
};

export default RoutesHandler;