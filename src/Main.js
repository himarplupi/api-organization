// Library
import Express from 'express';
import cors from 'cors';

// App
import Config from "./utils/Config.js";
import ModelHandler from "./models/ModelHandler.js";
import RoutesHandler from './routes/RoutesHanlder.js';

class Server {
  data = {};

  async init() {
    this.data.config = Config;
    this.model = new ModelHandler(this);
    this.model.connect(this.data.config.models.organization)

    this.runAPI();
  }

  runAPI() {
    const api = Express();

    api.use(cors());

    api.use(Express.json());

    api.use((err, req, res, next) => {
            
      if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {

          return res.status(400).json({
              statusCode: 400,
              message: `Bad Request: ${err.message}`
          });
      }

      next();

      return;
  })

    new RoutesHandler(this, api);

    api.listen(this.data.config.port, () => {
      console.log(`Server start in port ${this.data.config.port}`);
    })
  }
  
}

new Server().init();