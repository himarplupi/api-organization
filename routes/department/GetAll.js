// App
const DepartmentService = require('../../services/DepartmentService.js');

class GetAll {
  constructor(server, api) {
    api.get('/departments', async (req, res) => {
      const limit = Number(req.query.limit), page = Number(req.query.page), search = req.query.search;
      
      if(typeof(search) !== "string") {
        res.status(400).send({
          status: 400,
          message: 'Bad Request'
        });

        return;
      }

      const departmentService = new DepartmentService(server);
      const data = await departmentService.getAll(limit, page);

      res.send({
        status: "success",
        data: {
          departments: data.department,
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
      });
    });
  }
};

module.exports = GetAll;