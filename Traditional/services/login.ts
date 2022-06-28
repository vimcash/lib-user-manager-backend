import { getUser } from "../dao";
import { hash } from "vcl-model"

export const login = async (username: String, password: String) => {
    const hashPass = await hash(password);
    const user = await getUser(username, hashPass);
    return user ? user : "error"
}