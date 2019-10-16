const request = require("supertest");
const expect = require("chai").expect;
const assert = require("chai").assert;
const config = require("../knexfile");
const environmentConfig = config.test;
const knex = require("knex");
const cknex = knex(environmentConfig);
const app = require("../index");
const fixtures = require("./fixtures");

describe("CRUD", () => {
  before(done => {
    cknex.migrate
      .latest()
      .then(() => {
        console.log("migration ran");
        return cknex.seed.run();
      })
      .then(() => done());
  });

  it("gets users", done => {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        assert.typeOf(res.body, "array");
        if (err) throw err;
        done();
      });
  });

  it("Creates a user", done => {
    request(app)
      .post("/add-user")
      .send(fixtures.user)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done();
      });
  });
});
