import { getUser } from "../dao";

export const loginCookie = async (username: string, password: string) => {
    const user = await getUser(username);
    return user ? user : "error"
}