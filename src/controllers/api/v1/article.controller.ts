import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Article } from '../../../models/article.model';

class ArticleController{
  
  static findAll=async(req:Request, res:Response)=>{
    // eslint-disable-next-line no-invalid-this
    const articleRepository=getRepository(Article);
    return res.json(await articleRepository.find());
  }

  static findOne=async (req:Request, res:Response)=>{
    const articleRepository=getRepository(Article);
    const {id}=req.params;
    return res.json(await articleRepository.findOne(id));

  }
  static create=async(req:Request, res:Response)=>{
    const articleRepository=getRepository(Article);
    return res.json(await articleRepository.save(articleRepository.create(req.body)));
  }

  static update=async (req:Request, res:Response)=>{
    const articleRepository=getRepository(Article);
    const {id}=req.params;
    const articleToUpdate=await articleRepository.findOne(id);
    
    if(articleToUpdate){
      const articleRepository=getRepository(Article);
      articleRepository.merge(articleToUpdate, req.body);
      return res.json(await articleRepository.save(articleToUpdate));
    }
    return res.json({'error':'Article not found'});
  }
  static delete=async (req:Request, res:Response)=>{
    const articleRepository=getRepository(Article);
    const {id}=req.params;
    return res.json(await articleRepository.delete(id));
  }
  
};
export {ArticleController};