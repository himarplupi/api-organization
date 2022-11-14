import KabinetService from "../../services/KabinetService.js";

class GetAll {
  constructor(server, api) {
    api.get('/kabinet', async (req, res) => {
      const limit = Number(req.query.limit), page = Number(req.query.page), search = req.query.search;
      
      if(
        typeof(search) !== "string"
      ) {
        res.status(400).send({
          status: 400,
          message: 'Bad Request'
        });

        return;
      }

      const kabinetService = new KabinetService(server);
      const data = await kabinetService.getAll(limit, page);

      res.send({
        status: "success",
        data: {
          kabinet: data.kabinet,
          metadata: {
            total_page: Math.ceil(data.total / limit),
            total_data: data.total,
            page,
            link: {
              next: (page + 1) > Math.ceil(data.total / limit) ? null : `http://localhost:300/kabinet?limit=${limit}&page=${page + 1}&search=${search}`,
              prev: (page - 1) <= 0 ? null : `http://localhost:300/kabinet?limit=${limit}&page=${page - 1}&search=${search}`
            }
          }
        }
      });
    });
  }
};

export default GetAll;