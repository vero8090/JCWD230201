//import sequelize 
const { sequelize } = require('./../models')
const { Op } = require('sequelize')
const { v4: uuidv4 } = require('uuid');

//import models
const db = require('./../models/index')
const users = db.user

//import hashing

//import jwt

// Import transporter
const transporter = require('./../helpers/transporter')

const fs = require('fs').promises

const handlebars = require('handlebars');

// const client = require('./../connection/rconn');

const axios = require('axios')

module.exports = {
    register: async (req, res) => {
        try {
            let { name, email, phone_number } = req.body

            // let findEmail = await users.findAll({
            //     where: {email}
            // })

            // if(findEmail) return res.status(404).send({
            //     isError: true,
            //     message:'Email already exist',
            //     data:null
            // })

            let resCreateUsers = await users.create({ name, email, phone_number })

            const template = await fs.readFile('./template/confirmation.html', 'utf-8')
            const templateToCompile = await handlebars.compile(template)
            const newTemplate = templateToCompile({ username, url: `http://localhost:8000/activation/${resCreateUsers.dataValues.id}` })
            await transporter.sendMail({
                from: 'RAVETO',
                to: email,
                subject: 'Account Activation',
                html: newTemplate
            })

            res.status(201).send({
                isError: false,
                message: 'Register Success',
                data: null
            })

        } catch (error) {
            res.status(401).send({
                isError: true,
                message: error.message,
            })
        }
    }
}