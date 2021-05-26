import slugify from 'slugify';
import { titleCase } from 'title-case';
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany} from 'typeorm';
import { Article } from './article.model';
import { BaseModel } from './base.model';

@Entity()
class Category extends BaseModel {
  @Column('varchar', {
    nullable:false,
    length:100
  })
  public name?:string;

  @Column('varchar', {
    nullable:false,
    unique:true
  })
  public slug?:string;
  
  @ManyToMany(()=>Article, (article)=>article.categories)
  @JoinTable({
    name:'categories_articles'
  })
  public articles?:Article[];

  @BeforeInsert()
  slugit(){
    this.slug=slugify(this.name);
    this.name=titleCase(this.name);
  }
};
export{Category};