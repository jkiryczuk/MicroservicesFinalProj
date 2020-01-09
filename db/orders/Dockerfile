FROM mysql
ENV MYSQL_DATABASE='orders' \ 
MYSQL_USER='root' \ 
MYSQL_ROOT_PASSWORD='password'
ADD orders.sql /docker-entrypoint-initdb.d
ADD my.cnf /etc/mysql/conf.d
EXPOSE 3306