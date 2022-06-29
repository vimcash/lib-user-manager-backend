import { getUser } from "../dao";
import { comparePass } from "../middlewares/comparePass";

export const login = async (username: string, password: string) => {
    const user = await getUser(username);
    return user ? comparePass(user, password) : "error"
}