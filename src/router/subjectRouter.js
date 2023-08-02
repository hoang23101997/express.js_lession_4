const express = require('express');
const checkAPIKey = require('../middleware/checkApiKey')
const saveLog = require('../middleware/saveLog')
const subjectRouter = express.Router();
subjectRouter.use(checkAPIKey);
subjectRouter.use(saveLog);
subjectRouter.use(saveLog({api: 'subject'}))
subjectRouter.get('/', (req, res) => {
    res.send("THIS IS STUDENTS PAGE")
})




module.exports = subjectRouter;