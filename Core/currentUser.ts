import { verify } from 'jsonwebtoken';
import config from './config'

interface UserPayload {
  id: string;
  username: string;
}

export const currentUser = (session) => {
  try {
    const payload = verify(
      session.jwt,
      config.jwtSecret
    ) as UserPayload;
    return payload
  } catch (err) {
    return err
  }
};
