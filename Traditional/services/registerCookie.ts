import config from "../config/config";
import jwt from 'jsonwebtoken';
import { getUser } from "../dao";
import { TraditionalUserModel } from "vcl-model";
import { TraditionalUserTable } from "vcl-interface";

const userExist = async (username:string) => await getUser(username);

export const registerCookie = async ( user : TraditionalUserTable) => {
  
  if (await userExist(user.username)) {
      return "Error"
  }
  try {
    const newUser = TraditionalUserModel.build(user);
    await newUser.save();
  
    const userJwt = jwt.sign({
      id: newUser.id,
      username: newUser.username,
    }, config.jwtSecret, { expiresIn: '1h' });
  
    return userJwt;

  } catch (error) {
    console.log(error);
  }
}