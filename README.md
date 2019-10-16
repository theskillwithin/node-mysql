# node-mysql

docker node express mysql

# steps:

```
npm i
```

```
docker-compose build
docker-compose up
```

get mysql client `brew install mysql`
globally install knex `npm install knex -g`

# (if having problems connecting to db with knex or inside app):

```
mysql -h127.0.0.1 -uroot -ppassword
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
Query OK, 0 rows affected (0.01 sec)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
Query OK, 0 rows affected (0.01 sec)

mysql> SELECT plugin FROM mysql.user WHERE User = 'root';
```


notice the knexfile.js (config that lets knex and objection app connect to db);


# Mirgrate DB

run `knex migrate:latest` and `knex seed:run`