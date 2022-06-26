import { getUser } from "../dao";

export const loginCookie = async (username: String, password: String) => {
    const user = await getUser(username, password);
    return user ? user : "error"
}