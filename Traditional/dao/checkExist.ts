import { TradicionalUserModel } from "vcl-model";

export const checkExist = async (username: string) => await TradicionalUserModel.findOne({username}) !== null
