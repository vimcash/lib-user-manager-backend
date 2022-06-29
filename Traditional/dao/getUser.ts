import { TradicionalUserModel } from "vcl-model"

export const getUser = (username: string) => TradicionalUserModel.findOne({username})