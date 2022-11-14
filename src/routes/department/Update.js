// App
import DepartmentService from "../../services/DepartmentService.js";

class Update {
  constructor(server, api) {
    api.put('/departments/:id', async (req, res) => {
      const id = Number(req.params.id);
      const { name, division, logo } = req.body;
      
      const departmentService = new DepartmentService(server);
      const data = await departmentService.update(id, name, division, logo);

      if(data === 1) {
        res.send({
          "status": "success",
          "message": "department berhasil diperbarui"
        })

        return;
      } else {
        res.status(404).send({
          "status": "not found",
          "message": "department tidak ditemukan"
        });

        return;
      }
    });
  }
};

export default Update;