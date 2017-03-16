module.exports = {
  LOGGING_PATH: process.env.LOGGING_PATH,
  LOGGING_LEVEL: process.env.LOGGING_LEVEL || 'DEBUG',

  // DB
  DATABASE_SERVER: process.env.WMT_DB_SERVER || 'localhost',
  DATABASE: process.env.WMT_DB_NAME || 'wmt_db',
  DATABASE_USERNAME: process.env.WMT_DB_USERNAME || 'wmt',
  DATABASE_PASSWORD: process.env.WMT_DB_PASSWORD || 'wmt',

  // Worker
  ASYNC_WORKER_CRON: process.env.WMT_ASYNC_WORKER_CRON || '*/5 * * * * *', // default every 5 seconds
  ASYNC_WORKER_BATCH_SIZE: process.env.WMT_ASYNC_WORKER_BATCH_SIZE || '5'
}
