// require necessary tech
const pgp = require('pg-promise')({
  capSQL: true, // generate capitalized SQL
});
const env = require('dotenv');

// create necessary connection and pg-promise library helpers
const databaseHost = process.env.DATABASE_HOST || 'localhost';
const username = process.env.PG_USER || 'ellisona';
const pWord = process.env.PG_PASSWORD || 'bananas';

const cn = {
  host: databaseHost,
  port: 5432,
  database: 'strings',
  user: username,
  password: pWord,
};
const db = pgp(cn);

// { Non-preferred method of connection below, but available if desired: }
    // const connectionParams = 'postgres://localhost:5432/strings';
    // const db = pgp(connectionParams);

const columnSet = new pgp.helpers.ColumnSet([
  'string',
], { table: 'userInputs' });

// define methods to export
const retrieveStrings = (req, res, next) => {
  db.any('select * from userInputs')
      .then((data) => {
        res.status(200);
        const results = [];
        for (let i = 0; i < data.length; i += 1) {
          results.push(data[i].string);
        }
        res.send(results);
      })
      .catch((err) => {
        next(err);
      });
};

const insertString = (req, res, next) => {
  const insert = pgp.helpers.insert(req.body, columnSet);
  db.none(insert)
    .then((input) => {
      res.send({ input });
    })
      .catch((err) => {
        next(err);
      });
};

module.exports = { retrieveStrings, insertString };
