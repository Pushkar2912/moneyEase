const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { CATEGORIES } = require('../utils/constants');
const saltRounds = 10

exports.signUp = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const userExist = await db.user.findFirst({
            where: {
                email
            }
        })
        if(userExist){
            throw new Error("User Already Exist");
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = await db.user.create({
            data: {
                email,
                name,
                password: hashPassword
            }
        })
        //  Create default data for user
        console.log("USer", user);
        const userCategories = CATEGORIES.map((category) => {
            return{
                ...category, 
                userId: user.id
            }
        })
        await db.category.createMany({
            data: userCategories
        })
        
        return res.json({
            message: "User Created Successfully",
            email,
            name
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.user.findFirst({
            where: {
                email
            }
        })
        if(!user){
            throw new Error("User Does Not Exists");
        }
        
        if(!bcrypt.compareSync(password, user.password)){
            throw new Error("Incorrect Password")
        }
        const { password: newPassword, ...userWithoutPassword} = user
        const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET_KEY);
        return res.json({
            token,
            message: "User Logged In Sucessfully",
            userWithoutPassword
        })

    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.getMe = async (req, res) => {
    return res.json({
        user: req.user
    })
}