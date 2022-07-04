import { getUser } from "../dao";
import { TraditionalUserModel } from "vcl-model";
import { TraditionalUserTable } from "vcl-interface";

const userExist = async (username:string) => await getUser(username);

export const registerCookie = async ( user : TraditionalUserTable) => {
  
  try {
    if (await userExist(user.username)) {
      return "Error"
    }

    const newUser = TraditionalUserModel.build(user);
    await newUser.save();
    
    return newUser;

  } catch (error) {
    console.log(error);
  }
}