require('dotenv').config()

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT
} = process.env

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
<<<<<<< HEAD
    dialect: DB_DIALECT
=======
    dialect: DB_DIALECT,
    define: {
      timestamps: false
    }
>>>>>>> dev/organization
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
<<<<<<< HEAD
    dialect: DB_DIALECT
=======
    dialect: DB_DIALECT,
    define: {
      timestamps: false
    }
>>>>>>> dev/organization
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
<<<<<<< HEAD
    dialect: DB_DIALECT
=======
    dialect: DB_DIALECT,
    define: {
      timestamps: false
    }
>>>>>>> dev/organization
  }
}
