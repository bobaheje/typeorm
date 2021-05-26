import { Router } from 'express';
import { UserController } from '../controllers/api/v1/user.controller';
import { catchError } from '../middlewares/error';


const apiUserRouter=Router();

apiUserRouter.get('/api/v1/user', catchError(UserController.findAll) );
apiUserRouter.post('/api/v1/user', catchError(UserController.create));
apiUserRouter.get('/api/v1/user/:id', catchError(UserController.findOne));
apiUserRouter.put('/api/v1/user/:id', catchError(UserController.update));
apiUserRouter.delete('/api/v1/user/:id', catchError(UserController.delete));

export {apiUserRouter};