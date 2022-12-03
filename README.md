<<<<<<< HEAD
# api-organization

API Organization/Service Organization himarpl.com

## Install Projek

### Clone Projek

```
git clone https://github.com/himarplupi/api-organization.git
```

### Install

Buka projek yang sudah diclone pada terminal, lalu ketikkan

```javascript
npm install
```

### Running Projek

```javascript
npm run start
// equal
node ./bin/www
```

atau menggunakan nodemon

```javascript
npm run dev
// equak
nodemon ./bin/www
```

## Konfigurasi Environment

Step:

1. Duplikat file .env.example
2. Rename duplikasi file menjadi .env
3. Isi variabel .env sesuai dengan kredensial yang diperlukan

## Database

Pengelola database menggunakan ORM [sequelize](https://sequelize.org)

### Membuat file konfigurasi

Buat file dengan nama `.sequelizerc` dan direktori dengan nama `database` pada root direktori:

```javascript
// .sequlizerc

const path = require('path')

module.exports = {
  'config': path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
}
```

### Initial sequelize

```javascript
npx sequelize-cli init
```

*note: Pastikan sudah terinstall `sequelize`, `sequelize-cli`, `pg`, `pg-hstore`

Edit file `database/config/config.js` menjadi:

```javascript
// database/config/config.js

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
    dialect: DB_DIALECT
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT
  }
}
```

### Membuat Model dan Migration

```javascript
npx sequelize model:generate --name NamaModel --attributes field:tipe-data, ...
```

Setelah itu akan muncul file model pada direktori `database/models/` dan `database/migrations`

Dokumentasi selengkapnya:

🔗 [https://sequelize.org/docs/v6/other-topics/migrations/](https://https://sequelize.org/docs/v6/other-topics/migrations/)
=======

<div align="center">
  <h1>API Organization</h1>
  <p>Repositori ini adalah source code API Organization untuk Situs Web HIMA RPL</p>
</div>

<br>

<div align="left">
  API Documentation: <a href="API-docs.md">Click Here</a>
  <h2>TODO List</h2>
  <h3>Kabinet</h3>
  <ul>
    <li>Membuat fungsi untuk menambahkan kabinet baru ✔️</li>
    <li>Membuat fungsi edit kabinet ✔️</li>
    <li>Membuat fungsi delete kabinet ✔️</li>
    <li>Membuat fungsi untuk menampilkan seluruh kabinet ✔️</li>
  </ul>
  <h3>Department</h3>
  <ul>
    <li>Membuat fungsi untuk menambah departement ✔️</li>
    <li>Membuat fungsi edit departement ✔️</li>
    <li>Membuat fungsi delete departement ✔️</li>
    <li>Membuat fungsi untuk menampilkan seluruh departement ✔️</li>
    <li>Membuat fungsi untuk menampilkan detail  departemen berdasarkan id ✔️</li>
  </ul>
  <h3>Proker</h3>
  <ul>
    <li>Membuat fungsi untuk menambah proker baru ✔️</li>
    <li>Membuat fungsi edit proker ✔️</li>
    <li>Membuat fungsi delete proker ✔️</li>
    <li>Membuat fungsi untuk menampilkan seluruh proker ✔️</li>
    <li>Membuat fungsi untuk menampilkan detail proker berdasarkan id  ✔️</li>
    <li>Membuat fungsi pencarian proker ✔️</li>
  </ul>
</div>

<h2 align="center">How To Setup</h2>
<div align="left">
  <h3 align="center">PostgreSQL Database Setup</h3>
  <h4>Step 1</h4>
  <p>Create database organization:</p>

  ```postgresql
  CREATE DATABASE organization;
  ```
  
  <h4>Step 2</h4>
  <p>Connect to database organization:</p>

  ```postgresql
  \c organization
  ```
  
  <h4>Step 3</h4>
  <p>Create table kabinet:</p>
  
  ```postgresql
  CREATE TABLE kabinet(id bigserial NOT NULL, name varchar NOT NULL, priode integer NOT NULL, description text, logo text, active boolean);
  ```
  
  <h4>Step 4</h4>
  <p>Create enum types and table department:</p>
  
  ```postgresql
  CREATE TYPE division AS ENUM ('BE', 'DP');
  ```
  ```postgresql
  CREATE TABLE department(id bigserial NOT NULL, name varchar NOT NULL, division division NOT NULL, logo text);
  ```
  
  <h4>Step 5</h4>
  <p>Create table proker:</p>
  
  ```postgresql
  CREATE TABLE proker(id bigserial NOT NULL, name varchar NOT NULL, thumbnail text, department_id integer NOT NULL, link varchar, post_id integer);
  ```
</div>

<br><br>

<div align="left">
  <h3 align="center">NodeJS Setup</h3>
  <h4>Step 1</h4>

  <b>Clone:</b>

  ```bash
  git clone https://github.com/Asadaaaaa/api-organization
  ```

  <b>Or Download this repository</b>
  
  <h4>Step 2</h4>
  <p>Install npm Package:</p>

  ```bash
  npm i
  ```
  
  <h4>Step 3</h4>
  <p>Configuration the .env files:</p>

  ```shell
  # Database
  PORT= 3000 # Port API
  DB_USERNAME= # Username Database
  DB_PASSWORD= # Password Database
  DB_NAME=organization
  DB_HOST= localhost # IP Host Database
  DB_PORT=5432 # Port Database
  DB_DIALECT=postgres
  ```

  <h4>Step 4</h4>
  <p>Run App:</p>

  ```js
  npm start
  ```

<br><br>
<b>Done !</b>
</div>
>>>>>>> dev/organization
