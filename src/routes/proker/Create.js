// App
import ProkerService from "../../services/ProkerService.js";

class Create {
  constructor(server, api) {
    api.post('/prokers', async (req, res) => {
      const { name, thumbnail, department_id, link, post_id } = req.body;
      
      const prokerService = new ProkerService(server);
      const isCreated = await prokerService.create(name, thumbnail, department_id, link, post_id);

      if(isCreated === 'created') {
        res.status(201).send({
          "status": "success",
          "message": "proker baru berhasil dibuat"
        });

        return;
      } else {
        res.status(404).send({
          "status": "already",
          "message": "proker sudah tersedia"
        });

        return;
      }
    });
  }
};

export default Create;