const config = require('./config')

module.exports = {
  web: {
    client: 'mssql',
    connection: {
      host: config.DATABASE_SERVER,
      user: config.EXT_WEB_USERNAME,
      password: config.EXT_WEB_PASSWORD,
      database: config.DATABASE,
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  migrations: {
    client: 'mssql',
    connection: {
      host: config.DATABASE_SERVER,
      user: config.EXT_MIGRATION_USERNAME,
      password: config.EXT_MIGRATION_PASSWORD,
      database: config.DATABASE,
      options: {
        encrypt: true
      }
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true 
  }
}
