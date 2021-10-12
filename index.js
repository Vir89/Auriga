require('dotenv').config();

const express = require('express')
const connection = require('./config');
const app = express();
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//global middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//db connection

connection.connect(err => {
    if(err) {
        console.error(`The DB is not connected well, because have an Error: ${err}`)
        return;
    }
    console.log('Well connected!');
})

//register
app.post('/register', (req, res) => {
    bcrypt
    .hash(req.body.password, 10)
    .then(hashedPassword => {
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthday: req.body.birthday,
            nationality: req.body.nationality,
            phoneNumber: req.body.phoneNumber,
            suscriptor: req.body.suscriptor,
            suscriptionPlan: req.body.suscriptionPlan,
            password: hashedPassword
        }
        connection.query('INSERT INTO user SET ?', user, (err) => {
            if(err) {
                console.error(`Error registering the user Error: ${err}`)
                res.status(500).send(`Error registering the user Error: ${err}`)
            } else {
                res.status(201).send('Great! User registered without problem.')
            }
        })

    })

    .catch(hashError => console.error(`Error with your password. Error: ${hashError}`))
})

//login

app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    connection.query('SELECT * FROM user WHERE email=?', user.email, (err, results) => {
        if(err) {
            res.status(500).send('Email not found')
        } else {
            bcrypt
            .compare(user.password, results[0].password)
            .then((isMatch) => {
                if(isMatch) {
                    const generatedToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                    res.json({token: generatedToken, loggedIn: true})
                } else {
                    res.send('Incorrect password')
                }
            })
        }

    })

})

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === undefined) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.foundUser = usernext();
    })
}


app.get('/profile', authenticateToken, (req, res) => {
    connection.query('SELECT * FROM user WHERE email=?', req.foundUser.email, (err, results) => {
        if(err) res.sendStatus(500)
        res.json(results[0])
    })
})

app.post('/sso_login', (req, res) => {
    
    let user = null;

    if(req.body.googleId){
        user = {
            firstName: req.body.it.HU,
            lastName: req.body.it.YS,
            email: req.body.it.Tt
        }
    }else{
        user = {
            firstName: req.body.name,
            lastName: req.body.name,
            email: req.body.email
        }
    }

    connection.query('SELECT * FROM user WHERE email=?', user.email, (err, results) => {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else if(results.length == 0){
            //Crear usuario
            connection.query('INSERT INTO user SET ?', user, (err) => {
                if(err) {
                    console.error(`Error registering the user Error: ${err}`)
                    res.status(500).send(`Error registering the user Error: ${err}`)
                }
            })

        }

        const generatedToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({token: generatedToken, loggedIn: true});
    
    })
})




app.listen(port, (err) => {
    if(err) throw new Error(`Server is not working well! Error: ${err}`);
    console.log(`Server is working well at port: ${port}`)
});