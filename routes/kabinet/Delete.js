// App
const KabinetService = require('../../services/KabinetService.js')

class Delete {
  constructor (server, api) {
    api.delete('/kabinet/:id', async (req, res) => {
      const id = Number(req.params.id)
      const kabinetService = new KabinetService(server)
      const data = await kabinetService.delete(id)

      if (data === 1) {
        res.send({
          status: 'success',
          message: 'kabinet berhasil dihapus'
        })
      } else {
        res.status(404).send({
          status: 'not found',
          message: 'kabinet tidak ditemukan'
        })
      }
    })
  }
};

module.exports = Delete
