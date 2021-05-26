import { NextFunction, Request, Response } from 'express';


class ErrorMiddleware{

    public static notFound=(req:Request, res:Response, next:NextFunction)=>{
      const error=new Error();
      error.status=404;
      error.message='Not Found';
      next();
      
    }

    public static appError=(err:any, req:Request, res:Response, next:NextFunction)=>{
      res.status(err.status||500);
      res.json({err:{message:err.message}});

    }
}

const catchError=(fn)=>{
  return function(req:Request, res:Response, next:NextFunction){
    return fn(req, res, next).catch(next);
  };
};

export {ErrorMiddleware, catchError};