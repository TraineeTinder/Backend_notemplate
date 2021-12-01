const database = require('../database/connection')

class customerController{
    newCustomer(req,res){
        const {name, email, password, bio, insta_user, number} = req.body

        console.log(name, email, password, bio, insta_user, number)

        database.insert({name, email, password, bio, insta_user, number}).table("info").then(data=>{
            console.log(data)
            res.json({message:"Cliente cadastrado com sucesso!!"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new customerController()