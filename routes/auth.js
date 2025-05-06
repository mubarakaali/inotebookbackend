
const express = require('express')
const { body, validationResult } = require('express-validator');

const User = require('../models/User');
const { use } = require('react');
const router = express.Router();


router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body('password','Password must be alteast 4 character').isLength({min:4})
],(req,res)=>{

const errors  = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=> res.json(user))
    .catch(err=> {console.log(err)
        res.json({error : 'please set a unique value for email', message: err.message})})
})

module.exports = router