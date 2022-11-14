// App
import KabinetService from "../../services/KabinetService.js";

class Update {
  constructor(server, api) {
    api.put('/kabinet/:id', async (req, res) => {
      const id = Number(req.params.id);
      let { name, priode, description, logo, active} = req.body;
      
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

      const kabinetServices = new KabinetService(server);
      const data = await kabinetServices.update(id, name, priode, description, logo, active)

      if(data === 1) {
        res.send({
          "status": "success",
          "message": "kabinet berhasil diperbarui"
        })

        return;
      } else {
        res.status(404).send({
          "status": "not found",
          "message": "kabinet tidak ditemukan"
        });

        return;
      }
    });
  }
};

export default Update;