const pgp = require('pg-promise')();

const connectionString = 'postgresql://postgres:***@192.168.10.11:8484/riouc';

const db = pgp(connectionString);

module.exports = db;
