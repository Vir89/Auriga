const User = require('../models/User');



exports.createUser = async (req, res) => {

    console.log(req.body)
    const { email, password } = req.body;


    try {
      
        // create el nuevo usuario
        user = new User(req.body);

        //password hash

        // save user
        await user.save();


    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.find({});
        res.json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

