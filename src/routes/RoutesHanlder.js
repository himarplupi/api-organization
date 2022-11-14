// App
import Kabinet from "./kabinet/Handler.js";
import Departments from './department/Handler.js';

class RoutesHandler{
  constructor(server, api) {
    new Kabinet(server, api);
    new Departments(server, api);
  }
};

export default RoutesHandler;