// App
import ProkerService from "../../services/ProkerService.js";

class Delete {
  constructor(server, api) {
    api.delete('/prokers/:id', async (req, res) => {
      const id = Number(req.params.id);
      const prokerService = new ProkerService(server);
      const data = await prokerService.delete(id);

      if(data === 1) {
        res.send({
          "status": "success",
          "message": "proker berhasil dihapus"
        });

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

export default Delete;