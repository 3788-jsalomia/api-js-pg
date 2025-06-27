const {Pool} = require("pg");
require("dotenv").config();

const pool = new Pool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    port: process.env.DB_PORT
});

module.exports=pool;


