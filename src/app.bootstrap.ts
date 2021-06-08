import express, { json, urlencoded } from 'express';
import { ErrorMiddleware } from './middlewares/error';
import { apiArticleRouter } from './routes/article.router';
import { apiAuthRouter } from './routes/auth.router';
import { apiCategoryRouter } from './routes/category.router';
import { apiUserRouter } from './routes/user.router';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(urlencoded({extended:true}));
app.use(json());

app.use(apiAuthRouter);
app.use(apiUserRouter);
app.use(apiCategoryRouter);
app.use(apiArticleRouter);


//not found
app.use(ErrorMiddleware.appError);
app.use(ErrorMiddleware.notFound);



export {app};