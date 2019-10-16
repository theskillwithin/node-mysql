const { Model } = require("objection");
const Role = require("./Role");
const knexfile = require('../knexfile');
const knex = require('knex')(process.env.test ? knexfile.test : knexfile.development);

class User extends Model {
  $beforeUpdate() {
    this.updated_at = knex.fn.now();
  }

  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: "users.role_id",
          to: "roles.id",
        },
      },
    };
  }
}

module.exports = User;
