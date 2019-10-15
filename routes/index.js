const express = require("express");
const router = express.Router();
// const { catchErrors } = require('../handlers/errorHandlers');
const apiController = require("../controllers/apiController");

catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

router.get("/", apiController.index);

router.get("/users", catchErrors(apiController.users));
router.post("/add-user", catchErrors(apiController.addUser));
router.post("/delete-user/:id", catchErrors(apiController.deleteUser));
router.put("/update-user/:id", catchErrors(apiController.updateUser));

module.exports = router;
