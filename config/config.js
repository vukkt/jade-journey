require('dotenv').config();
const { parse } = require('pg-connection-string');

const connectionString = process.env.DATABASE_URL;
const config = parse(connectionString);

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    url: connectionString,
    username: config.user,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  },
  test: {
    use_env_variable: 'DATABASE_URL',
    url: connectionString,
    username: config.user,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
    logging: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    url: connectionString,
    username: config.user,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
    logging: false,
  },
};