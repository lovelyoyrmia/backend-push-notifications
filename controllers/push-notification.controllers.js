const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotificationService = require("../services/push-notification.services");

exports.testSendNotification = (req, res, next) => {
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

exports.sendToDevice = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    included_segments: ["included_player_ids"],
    contents: { en: req.body.messages },
    include_player_ids: req.body.devices,
    headings: { en: req.body.title },
    big_picture: req.body.imageUrl,
    url: req.body.url,
    content_available: true,
    small_icon: "ic_notification_icon",
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

exports.sendCustomMessage = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: req.body.messages },
    included_segments: ["Active Users"],
    headings: { en: req.body.title },
    content_available: true,
    small_icon: "ic_notification_icon",
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

exports.sendAttachmentUrl = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: req.body.messages },
    included_segments: ["Active Users"],
    headings: { en: req.body.title },
    content_available: true,
    small_icon: "ic_notification_icon",
    url: req.body.url,
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

exports.sendAttachmentUrlImage = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: req.body.messages },
    included_segments: ["Active Users"],
    headings: { en: req.body.title },
    content_available: true,
    small_icon: "ic_notification_icon",
    url: req.body.url,
    big_picture: req.body.imageUrl,
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
