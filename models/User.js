const { Model } = require("objection");
const Role = require("./Role");
const Knex = require("knex");
const connection = require("../knexfile");

const knexConnection = Knex(connection);
Model.knex(knexConnection);

class User extends Model {
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
