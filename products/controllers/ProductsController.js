const products = require('../data/ProductData');
const Product = require('../models/product');
const _ = require('underscore');

exports.getAll = (req, res) => {
    Product.getAll().then(
        function(allProducts) {
            console.log(allProducts);
            res.json(allProducts);
        }
    );
    //res.json(products);
};

exports.getForOrderById = (req, res) => {
    Product.getById(req.params.id).then(
        function(product) {
            //console.log("Product in product service"+
            //JSON.stringify(product));
            res.json(product);
        }
    )
}
exports.getById = (req, res) => {
    Product.getById(req.params.id).then(
        function(product) {
            res.json(product);
        }
    );    
};

exports.store = (req, res) => {
    const newProduct = Product.create({
        'name': req.body.name,
        'description': req.body.description,
        'price': req.body.price,
        'amount': req.body.amount,
    }).then(function() {
        res.json({
            'status':'saved!',
            'product': newProduct,
        });
    });


    //products.push(newProduct);
    
};

exports.updateById = (req, res) => {
    // Please note the API change!
    Product.update(req.body.product).then(
        function(product) {
            res.json(product);
        }
    )    
}