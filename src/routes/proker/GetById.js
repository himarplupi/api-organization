// App
import ProkerService from "../../services/ProkerService.js";

class GetById {
  constructor(server, api) {
    api.get('/prokers/:id', async (req, res) => {
      const id = Number(req.params.id);

      const prokerService = new ProkerService(server);
      const data = await prokerService.getById(id);
      
      if(data === null) {
        res.status(404).send({
          "status": "not found",
          "message": "proker tidak ditemukan"
        });
        return;
      }

      res.send({
        "status": "success",
        "data": {
          "prokers": {
            "id": data.id,
            "name": data.name,
            "thumbnail": data.thumbnail,
            "link": data.link,
            "department": {
              "id": data.department.id,
              "name": data.department.name,
              "division": data.department.division
            },
            "post_id": data.post_id
          }
        }
      });
    });
  }
};

export default GetById;