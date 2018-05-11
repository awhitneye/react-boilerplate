DROP DATABASE strings;

CREATE DATABASE strings;

\c strings;

DROP TABLE IF EXISTS userInputs;

CREATE TABLE userInputs (
  id serial NOT NULL PRIMARY KEY,
  string text,
);


