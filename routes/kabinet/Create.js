// App
const KabinetService = require('../../services/KabinetService.js');

class Create {
  constructor(server, api) {
    api.post('/kabinet', async (req, res) => {
      const { name, priode, description, logo, active} = req.body;
      
      if(!name || !priode) {
        res.status(400).send({
          status: 400,
          message: 'Bad Request'
        });

        return;
      }

      if(!active) {
        active = false;
      }
      
      if(
        typeof(name) !== "string" ||
        typeof(priode) !== "number" ||
        typeof(description) !== "string" ||
        typeof(logo) !== "string" ||
        typeof(active) !== "boolean"
      ) {
        res.status(400).send({
          status: 400,
          message: 'Bad Request'
        });

        return;
      }

      const kabinetService = new KabinetService(server);
      const isCreated = await kabinetService.addKabinet(name, priode, description, logo, active);

      if(isCreated === 'created') {
        res.status(201).send({
          status: "success",
          message: "kabinet baru berhasil dibuat"
        });
      } else if(isCreated === 'already') {
        res.status(400).send({
          status: "success",
          message: "kabinet sudah tersedia"
        });
      }

    });
  }
};

module.exports = Create;