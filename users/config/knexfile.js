module.exports = {
    client: 'mysql',
    connection: {
        host: 'user_db',
        user: 'user',//process.env.MYSQL_USER,
        password: 'password',
        database: 'users',
        port:3306
    }
}