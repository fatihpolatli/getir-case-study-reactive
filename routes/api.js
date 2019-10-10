import express from 'express';

import TestService from "../services/TestService";
import ResponseData from "../models/ResponseData";


var router = express.Router();



router.post('/', function (req, res, next) {

  var testService = new TestService();


  var postData = req.body;

  var t = testService.findAll(postData)
    .then(n => createSuccessResponse(n, res))
    .catch(n => createErrorResponse(n, res));
});

function createSuccessResponse(data, res) {

  const responseObject = {

    msg: "success",
    code: 0,
    records: data
  };

  res.send(responseObject);
}

function createErrorResponse(err, res) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  const responseObject = {

    msg: err.message,
    code: err.status || 500
  };

  res.send(responseObject);
}

export default router;
