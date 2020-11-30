module.exports = {
  HOST: "localhost",
  USER: "cmb",
  PASSWORD: "@Thepo1nt12345",
  DB: "testdb",
  port:"3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};