module.exports = {
    client: 'mysql',
    connection: {
        host: 'product_db',
        user: 'user',//process.env.MYSQL_USER,
        password: 'password',
        database: 'products',
        port:3306
    }
}