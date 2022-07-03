import config from "../config/config";
import jwt from 'jsonwebtoken';
import { getUser } from "../dao";
import { comparePass } from "../middlewares/comparePass";
import { TraditionalUserModel } from "vcl-model";

export const loginCookie = async (username: string, password: string) => {

    const user = await TraditionalUserModel.findOne({username});

    // if (!user) {
    //     return "Error"
    // }
  
    // if (!comparePass(user, password)) {
    //     return "Error"
    // }
    
    return user
}