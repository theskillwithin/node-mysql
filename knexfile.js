module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.IS_DOCKER ? "mysql" : "127.0.0.1",
      port: 3306,
      user: "root",
      password: "password",
      database: "db",
      // socket: '/var/run/mysqld/mysqlx.sock',
    },
  },
  test: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "password",
      database: "testdb",
    },
  },
};
