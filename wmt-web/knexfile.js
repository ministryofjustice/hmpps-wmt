const config = require('./config')

module.exports = {
  web: {
    client: 'postgres',
    connection: {
      host: config.DATABASE_SERVER,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  migrations: {
    client: 'postgres',
    connection: {
      host: config.DATABASE_SERVER,
      user: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true 
  }
}
