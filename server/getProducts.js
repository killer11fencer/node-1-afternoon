const prodgitucts = require('../products.json')

const getProducts = (req,res) => {
if(req.query.price) {
    let items = products.filter(product => product.price >= req.query.price);
    return res.status(200).send(items)
}
res.status(200).send(products)
}

module.exports = getProducts;