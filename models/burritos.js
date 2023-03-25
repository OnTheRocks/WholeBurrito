// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burrito = {
  all: function(cb) {
    orm.all("burritos", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burritos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burritos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burritos", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burrito;
