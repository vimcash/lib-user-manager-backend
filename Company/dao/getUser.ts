import { CompanyUserModel } from "vcl-model"

export const getUser = (username: string) => CompanyUserModel.findOne({username})