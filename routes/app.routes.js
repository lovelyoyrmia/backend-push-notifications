const pushNotificationController = require("../controllers/push-notification.controllers");

const express = require("express");
const router = express.Router();

router.get("/sendNotification", pushNotificationController.sendNotificationApi);
router.post(
  "/sendNotificationToDevice",
  pushNotificationController.sendNotificationToDevice
);

module.exports = router;
