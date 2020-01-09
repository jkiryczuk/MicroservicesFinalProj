const bookshelf= require('../config/bookshelf');

const OrderProduct = require('./order_product');

const Order = bookshelf.Model.extend({
    tableName: 'orders',
    idAttribute: 'order_id'
})

module.exports.getAll = () => {
    return Order.fetchAll();
}

module.exports.getById = (id) => {
    return new Order({'order_id':id}).fetch();
}

module.exports.create = (order) => {
        return new Order({
            email: order.email,
            full_name: order.full_name,
            address: order.address,
            status: 'CREATED'
        }).save();
};

module.exports.confirm = (order_id) => {
    return new Order({
        'order_id':order_id
    }).save({
        status:'CONFIRMED'
    },{patch: true});
}

module.exports.addProductToOrder = async (order_id, product, amount, price) => {
    new OrderProduct({
        'order_id':order_id,
        'product_id':product_id,
        'amount':amount,
        'price':price
    }).save();
}
module.exports.complete = (order_id) => {
    return new Order({
        'order_id':order_id
    }).save({
        status:'COMPLETED'
    },{patch: true});
}
