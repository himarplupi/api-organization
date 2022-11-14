// App
import DepartmentService from "../../services/DepartmentService.js";

class Create {
  constructor(server, api) {
    api.post('/departments', async (req, res) => {
      const { name, division, logo } = req.body;
      
      const departmentService = new DepartmentService(server);
      const isCreated = await departmentService.create(name, division, logo);

      if(isCreated === 'created') {
        res.status(201).send({
          "status": "success",
          "message": "departemen baru berhasil dibuat"
        });

        return;
      } else {
        res.status(404).send({
          "status": "already",
          "message": "departemen sudah tersedia"
        });

        return;
      }
    });
  }
};

export default Create;