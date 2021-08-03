import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

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
    console.log(data);
  } catch {
    return reponse.status(401).json({
      messagem: 'Não Autorizado!',
    });
  }
}
