const User = require('../Models/Users')

exports.registerUser = async (req, res) => {

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

            let response = await newUser.save()

            res.json({
                status:200,
                message: response
            })
        }

    } catch (error) {
       res.json({
           status: 500,
           message: error
       })
    }

}

