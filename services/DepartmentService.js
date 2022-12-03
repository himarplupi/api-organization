// Library
const { DataTypes } = require('sequelize')

class DepartmentService {
  constructor (server) {
    this.server = server
    this.db = this.server.model.db
    this.table = this.db.define('department', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      division: {
        type: DataTypes.ENUM('BE', 'DP'),
        allowNull: false
      },
      logo: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'department',
      timestamps: false
    })
  }

  async create (name, division, logo) {
    const [data, created] = await this.table.findOrCreate({
      where: { name },
      defaults: {
        division,
        logo
      }
    })

    if (created) {
      return 'created'
    } else {
      return 'already'
    }
  }

  async getAll (limit, page) {
    let data = await this.table.findAll()
    data = {
      total: data.length,
      department: data.map((val) => val.dataValues).slice(limit * (page - 1), limit * page)
    }

    return data
  }

  async getById (id) {
    const data = await this.table.findOne({ where: { id } })
    if (data === null) return null
    return data.dataValues
  }

  async update (id, name, division, logo) {
    const data = await this.table.update({ name, division, logo }, {
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

module.exports = DepartmentService
