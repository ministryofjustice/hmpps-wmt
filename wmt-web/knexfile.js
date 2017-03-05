const config = require('./config')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: config.DATABASE_SERVER,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/dev'
    },
    debug: true
  }
}
