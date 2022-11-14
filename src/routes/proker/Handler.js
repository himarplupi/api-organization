// App
import Create from "./Create.js";
import Delete from "./Delete.js";
import GetAll from "./GetAll.js";
import GetById from "./GetById.js";
import Update from "./Update.js";

class Handler {
  constructor(server, api) {
    new Create(server, api);
    new GetAll(server, api);
    new GetById(server, api);
    new Update(server, api);
    new Delete(server, api);
  }
};

export default Handler;