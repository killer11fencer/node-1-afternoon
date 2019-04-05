const express = require('express')
const app = express()
const port = 5001
const getProduct = require('./getProduct')
const getProducts = require('./getProducts')


app.listen(port,()=>console.log('listen on port',port))

app.get('/api/products/:id', getProduct)
app.get('/api/products', getProducts)