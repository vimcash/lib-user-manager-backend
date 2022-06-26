import { TradicionalUserModel } from "vcl-model";

export const checkExist = async (username: String) => await TradicionalUserModel.findOne({username}) !== null
