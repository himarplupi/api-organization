// App
const ProkerService = require('../../services/ProkerService.js');

class Update {
  constructor(server, api) {
    api.put('/prokers/:id', async (req, res) => {
      const id = Number(req.params.id);
      const { name, thumbnail, link, department_id } = req.body;
      
      const prokerService = new ProkerService(server);
      const data = await prokerService.update(id, name, thumbnail, link, department_id);

      if(data === 1) {
        res.send({
          "status": "success",
          "message": "proker berhasil diperbarui"
        })

        return;
      } else {
        res.status(404).send({
          "status": "not found",
          "message": "proker tidak ditemukan"
        });

        return;
      }
    });
  }
};

module.exports = Update;