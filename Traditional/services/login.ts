import { getUser } from "../dao";
import { comparePass } from "../middlewares/comparePass";

export const login = async (username: String, password: String) => {
    const user = await getUser(username);
    return user ? comparePass(user, password) : "error"
}