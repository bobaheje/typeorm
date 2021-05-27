import express, { json, urlencoded } from 'express';
import { ErrorMiddleware } from './middlewares/error';
import { apiArticleRouter } from './routes/article.router';
import { apiCategoryRouter } from './routes/category.router';
import { apiUserRouter } from './routes/user.router';


const app=express();
app.use(urlencoded({extended:true}));
app.use(json());

app.use(apiUserRouter);
app.use(apiCategoryRouter);
app.use(apiArticleRouter);

//not found
app.use(ErrorMiddleware.appError);
app.use(ErrorMiddleware.notFound);



export {app};