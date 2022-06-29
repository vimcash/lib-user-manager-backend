import { TraditionalUserModel } from "vcl-model";

export const checkExist = async (username: string) => await TraditionalUserModel.findOne({username}) !== null
