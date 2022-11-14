// App
import Kabinet from "./kabinet/Handler.js";

class RoutesHandler{
  constructor(server, api) {
    new Kabinet(server, api);
  }
}

export default RoutesHandler;