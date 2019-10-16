const request = require("supertest");
const expect = require("chai").expect;
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

  it("Creates a user", done => {
    request(app)
      .post("/add-user")
      .send(fixtures.user)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        console.log(response);
        expect(response.body).to.be.a("object");
        done();
      });
  });
});
