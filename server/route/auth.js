const bcrypt = require('bcryptjs');
const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
const router = express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
const auth = require('../middleware/authenticate');
const cookie = require('cookie-parser');

require("../db/conn");
const Users = require("../db/conn");
router.use(cookie());

// app.use(express.static(path.join(__dirname,"./views")));
// app.set("view engine","hbs");

router.get('/logout', auth, (req,res) =>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200);
})

router.get('/fav', auth, (req,res) =>{
    res.send(req.rUser);
})

router.post('/register', async (req,res) => {
    const {username,name,email,password,confirmPassword} = req.body;

    if(!username || !name || !email || !password || !confirmPassword){
        return res.status(422).json({error:"Fill the form completely"});
    }else{
        try {
            const userExist = await Users.findOne({email:email});
            if(userExist){
                return res.status(422).json({error:"Email Exists"});
            }else if(password!=confirmPassword){
                return res.status(422).json({error:"Password not matching"});
            }else{
                const User = new Users({username,name,email,password,confirmPassword});
                await User.save();
                res.status(201).json({message:"Registered successfully"})
            }
        } catch (error) {
            console.log(error);
        }
    }
})

router.post('/signin',async (req,res) => {
    try {
        let token;
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({error:"Please fill the data."});
        }
        const userLog = await Users.findOne({username:username});
        
        if(userLog){
            const isMatch = await bcrypt.compare(password,userLog.password);
            token = await userLog.generateAuthToken();
            res.cookie("jwtoken", token,{
                httpOnly:true
            });
            if(!isMatch){
                res.status(400).json({error:"Error in logging you in."});
            } else{
                res.status(201).json({message:"Logged in successfully"});
            }
        }else{
            res.json({error:"Invaild credientials"});
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;