import { Request, Response } from 'express';

class IndexController {
  index(request: Request, response:Response) {
    return response.json({ userID: request.userID });
  }
}
export default new IndexController();
