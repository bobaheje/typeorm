import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../../../models/category.model';


class CategoryController{
  

  static findAll=async (req:Request, res:Response)=>{
    const categoryRepository=getRepository(Category);
    return res.json(await categoryRepository.find());

  }

  static findOne=async(req:Request, res:Response)=>{
    const categoryRepository=getRepository(Category);
    const {id}=req.params;
    return res.json(await categoryRepository.findOne(id));

  }

  static create =async (req:Request, res:Response)=>{
    const categoryRepository=getRepository(Category);
    return res.json(categoryRepository.save(categoryRepository.create(req.body)));
  }

  static update=async (req:Request, res:Response)=>{
    const categoryRepository=getRepository(Category);
    const {id}=req.params;
    const categoryToUpdate=await categoryRepository.findOne(id);
    if(categoryToUpdate){
      categoryRepository.merge(categoryToUpdate, req.body);
      return res.json(await categoryRepository.save(categoryToUpdate));
    }
    return res.json({'error':'Category not found'});
  }

  static delete=async (req:Request, res:Response)=>{
    const categoryRepository=getRepository(Category);
    const {id}=req.params;
    return res.json(await categoryRepository.delete(id));
  }

};

export {CategoryController};
