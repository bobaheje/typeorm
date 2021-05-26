import { titleCase } from 'title-case';
import { BeforeInsert, Column, Entity, OneToMany} from 'typeorm';
import { Article } from './article.model';
import { BaseModel } from './base.model';

@Entity()
class User extends BaseModel{
  
  @Column('varchar', {
    nullable:false,
    length:50

  })
  public firstname?:string;

  @Column('varchar', {
    nullable:false,
    length:50

  })
  public lastname?:string;

  @OneToMany(()=>Article, (article)=>article.author)
  public articles?:Article[];

  @BeforeInsert()
  capitalize(){
    this.firstname=titleCase(this.firstname);
    this.lastname=this.lastname?.toLocaleUpperCase();
  }

}; 
export{User};