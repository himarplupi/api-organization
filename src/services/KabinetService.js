// Library
import { DataTypes } from 'sequelize';

class KabinetService {
  constructor(server) {
    this.server = server;
    this.db = this.server.model.db;
    this.table = this.db.define('kabinet', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      periode: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      logo: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    }, {
      tableName: 'kabinet',
      timestamps: false
    });
  }

  async addKabinet(name, priode, description, logo, active) {
    const [user, created] = await this.table.findOrCreate({
      where: { name },
      defaults: {
        priode,
        description,
        logo,
        active
      }
    });

    if(created) {
      return 'created';
    } else {
      return 'already';
    }
  }

  async getAll(limit, page) {
    let data = await this.table.findAll();
    data = {
      total: data.length,
      kabinet: data.map((val) => val.dataValues).slice(limit * (page - 1), limit * page)
    }
    
    return data;
  }

  async getById(id) {
    const data = await this.table.findOne({ where: { id }});
    if(data === null) return null;
    return data.dataValues;
  }

  async update(id, name, priode, description, logo, active) {
    const data = await this.table.update({name, priode, description, logo, active}, {
      where: {
        id
      }
    });

    return data[0];
  }

  async delete(id) {
    const data = await this.table.destroy({ where: { id }});
    
    return data;
  }
};

export default KabinetService;