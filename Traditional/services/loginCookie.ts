import config from "../config/config";
import jwt from 'jsonwebtoken';
import { getUser } from "../dao";
import { comparePass } from "../middlewares/comparePass";

export const loginCookie = async ({ username, password }) => {
  const user = await getUser(username);

  if (!user) {
      return "Error"
  }

  if (!comparePass(user, password)) {
      return "Error"
  }

  try {
    const userJwt = jwt.sign({
      id: user.id,
      username: user.username,
    }, config.jwtSecret, { expiresIn: '1h' });
  
    return userJwt

  } catch (error) {
    console.log(error);
  }
}