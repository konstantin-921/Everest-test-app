const express = require("express");
const router = express.Router();
const controller = require("../controllers/todos-controller");

router.get("/", controller.getAllTodos);
router.put("/update/completed", controller.completedTodos);
router.put("/update/uncompleted", controller.uncompletedTodos);

module.exports = router;
