module.exports = {
  development: {
    client: "mysql",
    connection: {
      // docker ps
      // docker exec -it IDofWeb /bin/bash
      // ip route show --> set to host
      host: "172.19.0.1",
      port: 3306,
      user: "root",
      password: "password",
      database: "db",
      // socket: '/var/run/mysqld/mysqlx.sock',
    },
  },
};
 