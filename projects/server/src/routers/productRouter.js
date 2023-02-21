// define tools express and router
const express = require('express')
const Router = express.Router()

//import all controller
const { productController } = require('./../controllers')


//path nya
Router.post('/category', productController.getCategory)

//
module.exports = Router