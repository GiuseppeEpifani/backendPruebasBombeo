const { Router } = require('express');
const { signIn, logOut } = require('../controllers/login.controller');

const router = Router();

router.post('/signIn', signIn);
router.post('/logOut', logOut);

module.exports = router;