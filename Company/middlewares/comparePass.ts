import { compare } from "vcl-model"

export const comparePass = async (inUser, inPass:string) => {
    return await compare(inUser.password, inPass)
}