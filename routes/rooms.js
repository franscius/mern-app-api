const express = require("express")
const { getRoom, getselectedRooms, updateRoomAvailability } = require('../controllers/room')
const { getRooms } = require('../controllers/room')
const { deleteRoom } = require('../controllers/room')
const { updateRoom } = require('../controllers/room')
const { createRoom } = require('../controllers/room')
const { verifyAdmin } = require('../utils/verifyToken.js')

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/", getRooms);
router.get("/roomn/:id", getselectedRooms)

export default router