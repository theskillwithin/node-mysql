const express = require("express");
const router = express.Router();
// const { catchErrors } = require('../handlers/errorHandlers');
const apiController = require("../controllers/apiController");

router.get("/", apiController.index);

router.get("/users", apiController.users);
router.get("/add-user", apiController.addUser);

/*
  API
*/

// router.get('/api/search', catchErrors(apiController.searchStores));
// router.get('/api/stores/near', catchErrors(apiController.mapStores));
// router.post('/api/stores/:id/heart', catchErrors(apiController.heartStore));

module.exports = router;
