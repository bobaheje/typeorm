import { Request, Response} from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../../models/user.model';


class UserController{
  

  static findAll=async (req:Request, res:Response)=>{
    const userRepository=getRepository(User);
    return res.json(await userRepository.find());
  }

  static create=async (req:Request, res:Response)=>{
   
    const userRepository=getRepository(User);
    return res.json(await userRepository.save(userRepository.create(req.body)));
  }

  static findOne=async (req:Request, res:Response)=>{
    const userRepository=getRepository(User);
    const {id}=req.params;
    return res.json(await userRepository.findOne(id));
  }

  static update=async(req:Request, res:Response)=>{
    const userRepository=getRepository(User);
    const {id}=req.params;
    const userToUpdate=await userRepository.findOne(id);
    if(userToUpdate){
      userRepository.merge(userToUpdate, req.body);
      return res.json(await UserController.userRepository.save(userToUpdate));
    }
    return res.json({'error':'User not found'});

  }
  static delete=async (req:Request, res:Response)=>{
    const userRepository=getRepository(User);
    const {id}=req.params;
    return res.json(await userRepository.delete(id));
  }
};
export {UserController};