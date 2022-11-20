// App
const DepartmentService = require('../../services/DepartmentService.js')

class Create {
  constructor (server, api) {
    api.post('/departments', async (req, res) => {
      const { name, division, logo } = req.body

      const departmentService = new DepartmentService(server)
      const isCreated = await departmentService.create(name, division, logo)

      if (isCreated === 'created') {
        res.status(201).send({
          status: 'success',
          message: 'department baru berhasil dibuat'
        })
      } else {
        res.status(404).send({
          status: 'already',
          message: 'department sudah tersedia'
        })
      }
    })
  }
};

module.exports = Create
