module.exports = {
    client: 'mysql',
    connection: {
        host: 'order_db',
        user: 'user',//process.env.MYSQL_USER,
        password: 'password',
        database: 'orders',
        port:3306
    }
}