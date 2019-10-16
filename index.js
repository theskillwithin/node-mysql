const Knex = require("knex");
const express = require("express");
const bodyParser = require("body-parser");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

const port = process.env.TEST ? 3001 : 3000;

const routes = require("./routes/index");

const knex = Knex(process.env.test ? knexConfig.test : knexConfig.development);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

const app = express();

app.use(bodyParser.json());

app.set("json spaces", 2);

app.use("/", routes);

// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
//
// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
