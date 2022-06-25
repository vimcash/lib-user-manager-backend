import { getUser } from "../dao";

export const login = async (username: String, password: String) => {
    const user = await getUser(username, password);
    return user ? user : "error"
}