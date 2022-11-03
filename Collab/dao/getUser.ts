import { CollabUserModel } from "vcl-model"

export const getUser = (username: string) => CollabUserModel.findOne({username})