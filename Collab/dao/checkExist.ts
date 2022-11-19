import { getUser } from "./getUser";

export const checkExist = async (username: string) => await getUser(username) !== null
