const bookshelf= require('../config/bookshelf');
bookshelf.plugin('registry');
const OrderProduct = bookshelf.Model.extend({
    tableName: 'orders_products',
})

module.exports.create = async (product) => {
    return new OrderProduct({
        'order_id':product.order_id,
        'product_name': product.product_name,
        'amount': product.amount,
        'price': product.price
    }).save()
};

//module.exports = bookshelf.model('OrderProduct', OrderProduct);