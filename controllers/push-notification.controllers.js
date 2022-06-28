const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotificationService = require("../services/push-notification.services");

exports.sendNotificationApi = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: "Test push notification" },
    included_segments: ["Active Users"],
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "Custome Notification",
    },
  };

  pushNotificationService.sendNotification(message, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "success",
      data: results,
    });
  });
};

exports.sendNotificationToDevice = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: "Test push notification" },
    included_segments: ["included_player_ids"],
    include_player_ids: req.body.devices,
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "Custome Notification",
    },
  };

  pushNotificationService.sendNotification(message, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "success",
      data: results,
    });
  });
};
