const User = require('../Models/Users')
const bcrypt = require('bcrypt')
const saltRounds = 10;
require('dotenv').config()
const { generateAccessToken } = require('../Utils/jwt')

exports.register = async (req, res) => {

    const { firstName, lastName, email, password, profileUrl } = req.body;

    try {
        const user = await User.findOne({ email: email })
        if (user) {
            res.json({
                status: 409,
                message: "Email already exists. Log in instead."
            })
        } else {
            let newUser = new User({
                firstName, lastName, email, password, profileUrl
            })

            bcrypt.genSalt(saltRounds, async function (err, salt) {

                bcrypt.hash(password, salt, async function (err, hash) {

                    newUser.password = hash

                    try {
                        let response = await newUser.save()
                        res.json({
                            status: 200,
                            message: response
                        })

                    } catch (error) {

                        res.json({
                            status: 400,
                            message: error
                        })

                    }
                });
            });


        }

    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }

}


exports.login = async (req, res) => {

    let { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            res.json({
                status: 404,
                message: "Email doesn't exist. You need to register first."
            })
        } else {
            try {
                bcrypt.compare(password, user.password, async function (err, result) {
                    if (err) {
                        res.json({
                            status: 403,
                            message: err
                        })
                    } else {
                        if (result == true) {
                        let r = generateAccessToken(user.email , process.env.JWT_TOKEN_SECRET)
                            res.json({
                                status: 200,
                                message: user,
                                token: r
                            })
                        } else {
                            res.json({
                                status: 401,
                                message: 'Incorrect Password'
                            })
                        }
                    }
                })
            } catch (error) {
                res.json({
                    status: 403,
                    message: error
                })
            }
        }
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }


}


