// Library
const { DataTypes } = require('sequelize')

// App
const DepartmentService = require('./DepartmentService.js')

class ProkerService {
  constructor (server) {
    this.server = server
    this.db = this.server.model.db
    this.table = this.db.define('proker', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thumbnail: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      tableName: 'proker',
      timestamps: false
    })
  }

  async create (name, thumbnail, department_id, link, post_id) {
    const [data, created] = await this.table.findOrCreate({
      where: { name, department_id },
      defaults: { thumbnail, link, post_id }
    })

    if (created) {
      return 'created'
    } else {
      return 'already'
    }
  }

  async getAll (limit, page, department_id) {
    let data = await this.table.findAll({ where: { department_id } })

    const departmentService = new DepartmentService(this.server)
    const departmentData = await departmentService.getById(department_id)

    data = {
      total: data.length,
      proker: data.map((val) => {
        val.dataValues.department = {
          id: department_id,
          name: departmentData.name
        }

        delete val.dataValues.department_id

        return val.dataValues
      }).slice(limit * (page - 1), limit * page)
    }

    return data
  }

  async getById (id) {
    const data = await this.table.findOne({ where: { id } })
    if (data === null) return null

    const departmentService = new DepartmentService(this.server)
    const departmentData = await departmentService.getById(data.department_id)

    data.dataValues.department = departmentData

    return data.dataValues
  }

  async update (id, name, thumbnail, link, department_id) {
    const data = await this.table.update({ name, thumbnail, link, department_id }, {
      where: {
        id
      }
    })

    return data[0]
  }

  async delete (id) {
    const data = await this.table.destroy({ where: { id } })

    return data
  }
}

module.exports = ProkerService
