const Config = {
  port: 3000,
  
  models: {
    organization: {
      hosts: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'loreMipsum@1321',
      database: 'organization',
      dialect: 'postgres',
      logging: false,
    }
  }
};

export default Config;