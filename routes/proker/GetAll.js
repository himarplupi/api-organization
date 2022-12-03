// App
const ProkerService = require('../../services/ProkerService.js')

class GetAll {
  constructor (server, api) {
    api.get('/prokers', async (req, res) => {
      const limit = Number(req.query.limit)
      const page = Number(req.query.page)
      const department_id = Number(req.query.department_id)
      const search = req.query.search

      if (typeof (search) !== 'string') {
        res.status(400).send({
          status: 400,
          message: 'Bad Request'
        })

        return
      }

      const prokerService = new ProkerService(server)
      const data = await prokerService.getAll(limit, page, department_id)

      res.send({
        status: 'success',
        data: {
          prokers: data.proker,
          metadata: {
            total_page: Math.ceil(data.total / limit),
            total_data: data.total,
            page,
            link: {
              next: (page + 1) > Math.ceil(data.total / limit) ? null : `http://localhost:300/departments?limit=${limit}&page=${page + 1}&search=${search}`,
              prev: (page - 1) <= 0 ? null : `http://localhost:300/departments?limit=${limit}&page=${page - 1}&search=${search}`
            }
          }
        }
      })
    })
  }
};

module.exports = GetAll
