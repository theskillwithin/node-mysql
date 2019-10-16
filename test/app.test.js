const config = require('../knexfile');
const environmentConfig = config['test'];
const knex = require('knex');
const cknex = knex(environmentConfig);

describe("CRUD", () => {
  before(() => {
    // run migrations
    cknex.migrate.latest().then(() => {
      // run seends
      return cknex.seed.run();
    });
    // run seeds
  });
});
