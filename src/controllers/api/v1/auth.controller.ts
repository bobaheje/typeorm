import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  static login =async (req:Request, res:Response, next:NextFunction)=>{
    
    const userRepository=getRepository(User);
    const {email, password}=req.body;
    try{
      const user =await userRepository.findOne({email});
      if(!user) {return res.status(401).json({'message':'User not found'});}
      if(!bcrypt.compareSync(password, user.password)) {return res.status(404).json({'message':'Bad credentials'});}
      const generatedToken=`Bearer ${jwt.sign({
        exp:Math.floor(Date.now()/1000)+(60*30),
        data:{'name':`${user.firstname} ${user.lastname}`}
      }, process.env.JWT_SECRET||'1')}`;

      return res.json(generatedToken);
    }
    catch(e){
      res.json({'message':e});
      next(e);
    }
    

  }

  static authorize=async(req:Request, res:Response, next:NextFunction)=>{
    try{
      const Token=req.headers.authorization?.split(' ')[1];
      const {data} =await jwt.verify(Token, process.env.JWT_SECRET||'1');
      
      next();

    }
    catch(e)
    {
      next(e);
    }
  }

}; 
export {AuthController};