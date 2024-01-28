const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const db = Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnautorization: false,
  },
});

module.exports = db;
