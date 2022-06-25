import { TradicionalUserModel } from "vcl-model";
import { TradicionalUserTable } from "vcl-interface";
import { getUser } from "../dao";

const addUser = (user : TradicionalUserTable) => {
    const newUser = TradicionalUserModel.build(user);
    newUser.save();
    return user
}

export const register = async (user : TradicionalUserTable) => await getUser(user.username, user.password) ? "error" : addUser(user)