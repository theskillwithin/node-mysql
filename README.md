# node-mysql

docker node express mysql

steps:

```
npm i
```

```
docker-compose build
docker-compose up
```

get mysql client `brew install mysql`
globally install knex `npm install knex -g`

(if having problems connecting to db with knex or inside app):

```
mysql -h127.0.0.1 -uroot -ppassword
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
Query OK, 0 rows affected (0.01 sec)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
Query OK, 0 rows affected (0.01 sec)

mysql> SELECT plugin FROM mysql.user WHERE User = 'root';
```

notice the knexfile.js (config that lets knex and objection app connect to db);

if getting ECONNREFUSED prob have to change the host ip for IS_DOCKER

run `docker ps` get container id for node-mysql_web

`docker exec -it CONTAINER_ID_HERE /bin/bash`

```
root@50f5748fb339:/usr/src/app# ip route show
default via 172.19.0.1 dev eth0
172.19.0.0/16 dev eth0 proto kernel scope link src 172.19.0.3
```

in ip route show it looks like `172.19.0.1` is our ip to the outside world. place this ip in the host ie (`host: process.env.IS_DOCKER ? "172.19.0.1" : "127.0.0.1",`)
