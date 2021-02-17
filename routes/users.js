// Includes Libraries

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const User = require('./../models/user');
const token_key = process.env.TOKEN_KEY;

//Middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//default route
//Access public

//url: http://localhost:5000/api/users

router.get(
    '/',
    (req, res)=>{
        return res.status(200).json(
            {
                "status": true,
                "message": "User default route."
            }
        );
    }
);

module.exports = router;