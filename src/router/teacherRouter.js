const express = require('express');
const checkAPIKey = require('../middleware/checkApiKey');
const saveLog = require('../middleware/saveLog');
const teacherRouter = express.Router();
teacherRouter.use(checkAPIKey)
teacherRouter.use(saveLog({api: 'teacher'}))
teacherRouter.get('/', (req, res) => {
    res.send(`Teacher`);
})

module.exports = teacherRouter;