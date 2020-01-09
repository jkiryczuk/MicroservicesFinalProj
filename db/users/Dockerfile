FROM mysql
ENV MYSQL_DATABASE='users' \ 
MYSQL_USER='root' \ 
MYSQL_ROOT_PASSWORD='password'
ADD users.sql /docker-entrypoint-initdb.d
ADD my.cnf /etc/mysql/conf.d
EXPOSE 3306