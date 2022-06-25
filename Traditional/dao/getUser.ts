import { TradicionalUserModel } from "vcl-model";

export const getUser = (username: String, password: String) => TradicionalUserModel.findOne({username, password})