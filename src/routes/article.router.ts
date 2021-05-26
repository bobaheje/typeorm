import { Router } from 'express';
import { ArticleController } from '../controllers/api/v1/article.controller';
import { catchError } from '../middlewares/error';


const apiArticleRouter=Router();

apiArticleRouter.get('/api/v1/article', catchError(ArticleController.findAll) );
apiArticleRouter.post('/api/v1/article', catchError(ArticleController.create));
apiArticleRouter.get('/api/v1/article/:id', catchError(ArticleController.findOne));
apiArticleRouter.put('/api/v1/article/:id', catchError(ArticleController.update));
apiArticleRouter.delete('/api/v1/article/:id', catchError(ArticleController.delete));

export {apiArticleRouter};