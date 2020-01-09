const bookshelf= require('../config/bookshelf');

const User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'user_id'
})

module.exports.getAll = () => {
    return User.fetchAll();
}

module.exports.getById = (id) => {
    return new User({'user_id':id}).fetch();
}

module.exports.create = (user) => {
    return new User({
        email: user.email,
        name: user.name,
        surname: user.surname,
        birthdate: new Date(user.birthdate),
        gender: user.gender
    }).save();
};

module.exports.update = (user) => {
    return new User({
        id: user.user_id
    }).save( {
        email: user.email,
        name: user.name,
        surname: user.surname,
        birthdate: new Date(user.birthdate),
        gender: user.gender
        }, 
        {patch: true}
    );
}