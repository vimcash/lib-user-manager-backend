import config from "../config/config";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getUser } from "../dao";
import { comparePass } from "../middlewares/comparePass";

export const loginCookie = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await getUser(username);

  if (!user) {
      return "Error"
  }

  const userExist = comparePass(user, password)
  if (!userExist) {
      return "Error"
  }

  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.username,
    },
    config.jwtSecret
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(200).send(user);  
}