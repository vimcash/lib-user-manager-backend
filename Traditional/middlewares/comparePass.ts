import { compare } from "vcl-model"

export const comparePass = async (inUser, inPass:String) => {
    return await compare(inUser.password, inPass) ? inUser : "error"
}