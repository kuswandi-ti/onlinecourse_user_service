const express = require('express');
const router = express.Router();

const userHandler = require('./handler/users');

router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.put('/update/:id', userHandler.update);
router.get('/search/:id', userHandler.getUser)
router.get('/', userHandler.getUsers)
router.post('/logout', userHandler.logout)

module.exports = router;
