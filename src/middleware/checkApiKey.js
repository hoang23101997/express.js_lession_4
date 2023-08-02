const users = require("../data/user.data");
const checkAPIKey = (req, res, next) => {
  const apiKey = req.headers.apikey;
  const dataAPIKey = users.some((user) => user.apiKey === apiKey);
  console.log(apiKey);
  if (dataAPIKey) {
    next();
  } else {
    res.json({ message: "wrong api key!" });
  }
};
module.exports = checkAPIKey;
