import { TraditionalUserModel } from "vcl-model"

export const getUser = (username: string) => TraditionalUserModel.findOne({username})