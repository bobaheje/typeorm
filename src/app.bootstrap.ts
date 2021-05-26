import express, { json, urlencoded } from 'express';
import { apiArticleRouter } from './routes/article.router';
import { apiCategoryRouter } from './routes/category.router';
import { apiUserRouter } from './routes/user.router';


const app=express();
app.use(urlencoded({extended:true}));
app.use(json());

app.use(apiUserRouter);
app.use(apiCategoryRouter);
app.use(apiArticleRouter);



export {app};