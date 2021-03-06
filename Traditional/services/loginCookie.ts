import config from "../../Core/config";
import { sign } from "jsonwebtoken"
import { getUser } from "../dao";
import { comparePass } from "../../Core";

export const loginCookie = async ({ username, password }) => {
  const user = await getUser(username);

  if (!user) {
      return "Error"
  }

  if (!comparePass(user, password)) {
      return "Error"
  }
  
  const userJwt = sign({
    id: user._id.toString(),
    username: user.username
  }, config.jwtSecret);
  return userJwt

}