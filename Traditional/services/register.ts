import { TraditionalUserModel } from "vcl-model";
import { TraditionalUserTable } from "vcl-interface";

const addUser = (user : TraditionalUserTable) => {
    const newUser = TraditionalUserModel.build(user);
    newUser.save();
    return user
}

export const register = async (user : TraditionalUserTable) => addUser(user)