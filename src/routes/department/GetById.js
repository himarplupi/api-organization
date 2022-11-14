// App
import DepartmentService from "../../services/DepartmentService.js";

class GetById {
  constructor(server, api) {
    api.get('/departments/:id', async (req, res) => {
      const id = Number(req.params.id);

      const departmentService = new DepartmentService(server);
      const data = await departmentService.getById(id);
      
      if(data === null) {
        res.status(404).send({
          "status": "not found",
          "message": "department tidak ditemukan"
        });
        return;
      }

      res.send({
        "status": "success",
        "data": {
          "department": {
            "id": data.id,
            "name": data.name,
            "division": data.division,
            "logo": data.logo,
          }
        }
      });
    });
  }
};

export default GetById;