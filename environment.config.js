const dotenv = require("dotenv");
dotenv.config();
const REACT_APP = /^REACT_APP_/i;
const envVars = Object.keys(process.env)
    .filter((key) => REACT_APP.test(key))
    .reduce(
        (env, key) => {
            env[key] = process.env[key];

            return env;
        },
        {
            NODE_ENV: process.env.NODE_ENV || "development",
        }
    );


module.exports = envVars;