"use strict";
exports.__esModule = true;
exports.getUser = void 0;
var vcl_model_1 = require("vcl-model");
var getUser = function (username, password) { return vcl_model_1.TradicionalUserModel.findOne({ username: username, password: password }); };
exports.getUser = getUser;
