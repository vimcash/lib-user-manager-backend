import { CompanyUserModel } from "vcl-model";
import { CompanyUserTable } from "vcl-interface";

const addUser = (user : CompanyUserTable) => {
    const newUser = CompanyUserModel.build(user);
    newUser.save();
    return user
}

export const register = async (user : CompanyUserTable) => addUser(user)