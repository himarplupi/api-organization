// App
import KabinetService from "../../services/KabinetService.js";

class GetById {
  constructor(server, api) {
    api.get('/kabinet/:id', async (req, res) => {
      const id = Number(req.params.id);

      const kabinetService = new KabinetService(server);
      const data = await kabinetService.getById(id);
      
      if(data === null) {
        res.status(404).send({
          "status": "not found",
          "message": "kabinet tidak ditemukan"
        });
        return;
      }
      res.send({
        "status": "success",
        "data": {
          "kabinet": {
            "id": data.id,
            "name": data.name,
            "priode": data.periode,
            "description": data.description,
            "logo": data.logo,
            "active": data.active
          }
        }
      });
    });
  }
};

export default GetById;