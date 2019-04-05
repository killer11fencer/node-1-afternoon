const products = require('../products.json')

const getProduct = (req,res) =>
{ let {id} = req.params
  for(let i = 0; i < products.length; i++) {
      if(+products[i].id === +id) {
          return res.status(200).send(products[i])
      }
  }
  return res.status(500).send('Item not on list')
}

module.exports = getProduct