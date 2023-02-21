//import sequelize 
const {sequelize} = require('../models')
const { Op } = require('sequelize')
const {v4:uuidv4} = require('uuid');

//import models
const db = require('./../models/index.js')

//import hashing

//import jwt

module.exports= {
    getAllAdmin:async(req,res)=>{
      try {
        let allData = await db.admin.findAll()
        
        res.status(201).send({
            isError:false,
            message:'Get Data Success!',
            data:{
                allData
            }
        })
      } catch (error) {
        res.status(404).send({
            isError:true,
            message:error.message,
            data:null
        })
      }  
    },
    
    adminLogin: async(req,res)=>{
        try {
           let {email, password}= req.body
           
           let dataAdmin = await db.admin.findOne({
            where:{
                email
            }
           })
           if(!dataAdmin) throw {message:'Wrong Email!'}
           if(dataAdmin.password != password) throw {message:'Wrong Password!'}
       

           res.status(201).send({
            isError:false,
            message:'Login Success!',
            data: 
                dataAdmin
            
           })

           
        } catch (error) {
            res.status(404).send({
                isError:true,
                message: error.message,
                data:null
               })
        }
    }
}