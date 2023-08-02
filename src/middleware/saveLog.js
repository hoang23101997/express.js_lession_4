const logs = require('../data/logs')
const saveLog = (option) => {
    return (req, res, next) => {
        const apiKey = (req.headers.apikey);
        const api = option.api;
        const log = {
            apiKey,
            api,
            time: Date.now()
        }
        logs.push(log)
      console.log(logs);
      next();
    };
  };
module.exports = saveLog