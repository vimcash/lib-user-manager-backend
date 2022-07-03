import config from "../config/config";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getUser } from "../dao";
import { TraditionalUserModel } from "vcl-model";

export const registerCookie = async (req: Request, res: Response) => {
  const { 
    username, 
    password,      
    firstName,
    lastName,
    phoneNumber,
    email,
  } = req.body;
  const user = await getUser(username);

  if (user) {
      return "Error"
  }

  const newUser = TraditionalUserModel.build({
    username, 
    password,
    firstName,
    lastName,
    phoneNumber,
    email,
  });
  await newUser.save();

  const userJwt = jwt.sign(
    {
      id: newUser.id,
      email: newUser.username,
    },
    config.jwtSecret
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(200).send(newUser);  
}