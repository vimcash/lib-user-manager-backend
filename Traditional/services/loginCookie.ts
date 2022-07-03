import config from "../config/config";
import jwt from 'jsonwebtoken';
import { getUser } from "../dao";
import { comparePass } from "../middlewares/comparePass";

export const loginCookie = async ({ username, password }) => {

  try {
    const user = await getUser(username);

    if (!user) {
        return "Error"
    }
  
    if (!comparePass(user, password)) {
        return "Error"
    }
    
    return user

  } catch (error) {
    console.log(error);
  }
}