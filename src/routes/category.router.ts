import { Router } from 'express';
import { CategoryController } from '../controllers/api/v1/category.controller';
import { catchError } from '../middlewares/error';


const apiCategoryRouter=Router();

apiCategoryRouter.get('/api/v1/category', catchError(CategoryController.findAll) );
apiCategoryRouter.post('/api/v1/category', catchError(CategoryController.create));
apiCategoryRouter.get('/api/v1/category/:id', catchError(CategoryController.findOne));
apiCategoryRouter.put('/api/v1/category/:id', catchError(CategoryController.update));
apiCategoryRouter.delete('/api/v1/category/:id', catchError(CategoryController.delete));

export {apiCategoryRouter};