module.exports = {
  // DB
  DATABASE_SERVER: process.env.WMT_DB_SERVER || 'localhost',
  DATABASE: process.env.WMT_DB_NAME || 'wmt_db',
  DATABASE_USERNAME: process.env.WMT_DB_USERNAME || 'wmt',
  DATABASE_PASSWORD: process.env.WMT_DB_PASSWORD || 'wmt',

  SESSION_SECRET: 'secret'
}
