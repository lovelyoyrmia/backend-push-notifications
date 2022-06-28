const pushNotificationController = require("../controllers/push-notification.controllers");

const express = require("express");
const router = express.Router();

router.get(
  "/testSendNotification",
  pushNotificationController.testSendNotification
);
router.post("/sendToDevice", pushNotificationController.sendToDevice);
router.post("/sendCustomMessage", pushNotificationController.sendCustomMessage);
router.post("/sendAttachmentUrl", pushNotificationController.sendAttachmentUrl);
router.post(
  "/sendAttachmentUrlImage",
  pushNotificationController.sendAttachmentUrlImage
);

module.exports = router;
