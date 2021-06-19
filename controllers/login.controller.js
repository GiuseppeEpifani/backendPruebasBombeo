const { response } = require('express');

const signIn = (req, res = response) => {

    const body = req.body;
    console.log(body);
    res.json({
        msg: 'login',
        body
    });
}

const logOut = (req, res = response) => {
    res.json({
        msg: 'logOut'
    });
}

module.exports = { signIn, logOut }