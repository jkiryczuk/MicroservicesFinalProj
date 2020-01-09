const Order = require('../models/order');
const OrderProduct = require('../models/order_product');
const _ = require('underscore');
const Request = require("request");

exports.getAll = (req, res) => {
    Order.getAll().then(
        function(allOrders) {
            console.log(allOrders);
            res.json(allOrders);
        }
    );
};

module.exports.store = (req, res) => {
        Order.create({
            'full_name':req.body.full_name,
            'email':req.body.email,
            'address':req.body.address,
            'status':'CREATED',
        }).then(function(data) {
            res.json({
                'status':'order saved!',
                'order': data,
            });
        }).catch(err => console.log(JSON.stringify(err)));
    
};

module.exports.confirm = (req, res) => {
    Order.confirm(req.body.order_id).then(function(data) {
        res.json({
            'status':'order saved!',
            'order': data,
        });
    });
}

module.exports.complete = (req, res) => {
    Order.complete(req.body.order_id).then(function(data) {
        res.json({
            'status':'order completed!',
            'order': data,
        });
    });
}

module.exports.addProductToOrder = (req, res) => {
    Request.get({
        "url": "http://"+ process.env.PRODUCT_SERVICE_HOST + "8081/products/fororder/" + req.body.product_id,
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log("Got response:" + JSON.stringify(response));
        console.log("Got product:" + JSON.stringify(body))
        let product = JSON.parse(body);
        let result = {
            'order_id':req.body.order_id,
            'product_name': product.name,
            'amount': req.body.amount,
            'price': product.price
        };
        console.log("Stringified result " + JSON.stringify(result));
        OrderProduct.create(result).then(function(data) {
            console.log("Product added to order: " + JSON.stringify(data));
            res.json({
                'data':data
            });
            return;
        });
        }
    );
    
}