// App
const DepartmentService = require('../../services/DepartmentService.js')

class Delete {
  constructor (server, api) {
    api.delete('/departments/:id', async (req, res) => {
      const id = Number(req.params.id)
      const departmentService = new DepartmentService(server)
      const data = await departmentService.delete(id)

      if (data === 1) {
        res.send({
          status: 'success',
          message: 'department berhasil dihapus'
        })
      } else {
        res.status(404).send({
          status: 'not found',
          message: 'department tidak ditemukan'
        })
      }
    })
  }
};

module.exports = Delete
