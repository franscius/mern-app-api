const { updateUser, deleteUser, getUser, getUsers } = require('../controllers/user');
const express = require('express');
const { verifyAdmin, verifyToken, verifyUser } = require('../utlis/verifyToken');

const router = express.Router();

//update
router.put("/update/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getUsers);




export default router