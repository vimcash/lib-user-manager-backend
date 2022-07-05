import config from "../../Core/config";
import { sign } from "jsonwebtoken"
import { getUser } from "../dao";
import { comparePass } from "../../Core";

export const loginCookie = async ({ username, password }) => {
  const user = await getUser(username);
  if (!user)
    return "Error";
  const compare = await comparePass(user, password);
  if (!compare)
    return "Error";

  const userJwt = sign({
    id: user._id.toString(),
    username: user.username,
    companyID: user.companyID
  }, config.jwtSecret);
  return userJwt;
}