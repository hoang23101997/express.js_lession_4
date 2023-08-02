const express = require('express');
const checkAPIKey = require('../middleware/checkApiKey');
const saveLog = require('../middleware/saveLog');
const studentRouter = express.Router();
studentRouter.use(checkAPIKey)
studentRouter.use(saveLog({api: 'student'}))
studentRouter.get('/', (req, res) => {
    res.send("THIS IS STUDENTS PAGE")
})


module.exports = studentRouter;