import { TradicionalUserModel } from "vcl-model"

export const getUser = (username: String) => TradicionalUserModel.findOne({username})