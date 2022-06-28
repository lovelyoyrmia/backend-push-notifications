const dotenv = require("dotenv");
dotenv.config();

const ONE_SIGNAL_CONFIG = {
  APP_ID: "5cfff6b9-3b19-4dc9-9eaa-7815a0e82868",
  API_KEY: process.env.API_KEY,
};

module.exports = {
  ONE_SIGNAL_CONFIG,
};
