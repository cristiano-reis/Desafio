import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayLoad{
  id: string;
  iat: number;
  exp:number;
}

export default function sessaoMiddleware(

  request: Request, reponse:Response, next:NextFunction,
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return reponse.status(401).json({
      messagem: 'Não Autorizado!',
    });
  }
  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.APP_SECRET as string);

    const { id } = data as TokenPayLoad;
    request.userID = id;
    return next();
  } catch (err) {
    if (err.message === 'invalid signature') {
      return reponse.status(404).json({
        messagem: 'Não Autorizado!',
      });
    }

    if (err.message === 'jwt expired') {
      return reponse.status(401).json({
        messagem: 'Sessão inválida',
      });
    }
    return reponse.status(401).json({
      messagem: 'Não Autorizado!',
    });
  }
}
