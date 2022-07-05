import config from "../../Core/config";
import { sign } from "jsonwebtoken"
import { getUser } from "../dao";
import { comparePass } from "../../Core";

export const loginCookie = async ({ username, password }) => {
  const user = await getUser(username);
  if (!user || !comparePass(user, password))
    return "Error"

  const userJwt = sign({
    id: user._id.toString(),
    username: user.username,
    companyID: user.companyID
  }, config.jwtSecret);
  return comparePass(user, password)
}