import { TradicionalUserModel } from "vcl-model";
import { TradicionalUserTable } from "vcl-interface";
import { checkExist } from "../dao";

const addUser = (user : TradicionalUserTable) => {
    const newUser = TradicionalUserModel.build(user);
    newUser.save();
    return user
}

export const register = async (user : TradicionalUserTable) => addUser(user)