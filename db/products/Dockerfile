FROM mysql
ENV MYSQL_DATABASE='products' \ 
MYSQL_USER='root' \ 
MYSQL_ROOT_PASSWORD='password'
ADD products.sql /docker-entrypoint-initdb.d
ADD my.cnf /etc/mysql/conf.d
EXPOSE 3306