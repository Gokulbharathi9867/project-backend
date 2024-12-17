const express = require('express');
const { getalluser, getoneuser, createuser, updateuser, deleteuser } = require('./ecommercecontroller');
const router = express.Router()


router.get('/users', getalluser)
router.get('/users/:id', getoneuser)
router.post('/user', createuser)
router.patch('/user/:id', updateuser)
router.delete('/user/:id', deleteuser)

  module.exports = router;