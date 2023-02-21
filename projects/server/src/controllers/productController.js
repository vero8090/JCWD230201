//import sequelize 
const { sequelize } = require('./../models')
const { Op } = require('sequelize')
const { v4: uuidv4 } = require('uuid');

//import models
const db = require('./../models/index')
const users = db.user
const categories = db.categories

//import hashing

//import jwt

module.exports = {
    getCategory: async (req, res) => {
        try {

            
            

            let getCategory = await categories.findAll({name})

            res.status(201).send({
                isError: false,
                message:'Get Data Success',
                data: getCategory
            })
        } catch (error) {
            
        }
    }
}