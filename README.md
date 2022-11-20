
<div align="center">
  <h1>API Organization</h1>
  <p>Repositori ini adalah source code API Organization untuk Situs Web HIMA RPL</p>
</div>

<br>

<div align="left">
  API Documentation: 
  <h2>TODO List</h2>
  <h3>Kabinet</h3>
  <ul style="list-style-type: '✔️';">
    <li>Membuat fungsi untuk menambahkan kabinet baru</li>
    <li>Membuat fungsi edit kabinet</li>
    <li>Membuat fungsi delete kabinet</li>
    <li>Membuat fungsi untuk menampilkan seluruh kabinet</li>
  </ul>
  <h3>Department</h3>
  <ul style="list-style-type: '✔️';">
    <li>Membuat fungsi untuk menambah departement</li>
    <li>Membuat fungsi edit departement</li>
    <li>Membuat fungsi delete departement</li>
    <li>Membuat fungsi untuk menampilkan seluruh departement</li>
    <li>Membuat fungsi untuk menampilkan detail  departemen berdasarkan id</li>
  </ul>
  <h3>Proker</h3>
  <ul style="list-style-type: '✔️';">
    <li>Membuat fungsi untuk menambah proker baru</li>
    <li>Membuat fungsi edit proker</li>
    <li>Membuat fungsi delete proker</li>
    <li>Membuat fungsi untuk menampilkan seluruh proker</li>
    <li>Membuat fungsi untuk menampilkan detail proker berdasarkan id</li>
    <li>Membuat fungsi pencarian proker</li>
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
  CREATE TABLE kabinet(id bigserial NOT NULL, name varchar NOT NULL, priode integer NOT NULL, description text, logo text, actie boolean);
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
  CREATE TABLE department(id bigserial NOT NULL, name varchar NOT NULL, thumbnail text, department_id integer NOT NULL, link varchar, post_id integer);
  ```
</div>

<br><br>

<div align="left">
  <h3 align="center">NodeJS Setup</h3>
  <h4>Step 1</h4>
  <p>Create database organization:</p>

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