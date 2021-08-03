import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayLoad{
  id: string;
  iat: number;
  exp:number;
}

export default function autMiddleware(

  request: Request, reponse:Response, next:NextFunction,
) {
  const { authorization } = request.headers;

  if (authorization) {
    return reponse.status(401).json({
      messagem: 'Não Autorizado!',
    });
  }
  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'secret');
    const { id } = data as TokenPayLoad;
    request.userID = id;
    return next();
  } catch {
    return reponse.status(401).json({
      messagem: 'Não Autorizado!',
    });
  }
}
