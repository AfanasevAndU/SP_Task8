const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/", userController.getUsers);
router.get("/sorted", userController.getUsersSorted);
router.get("/age/:age", userController.getUsersByAge);
router.get("/domain/:domain", userController.getUsersByDomain);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
