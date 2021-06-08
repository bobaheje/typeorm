import { Router } from 'express';
import { AuthController } from '../controllers/api/v1/auth.controller';
import { catchError } from '../middlewares/error';


const apiAuthRouter=Router();

apiAuthRouter.post('/api/v1/login', catchError(AuthController.login));


export {apiAuthRouter};