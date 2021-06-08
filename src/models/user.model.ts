import { titleCase } from 'title-case';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany} from 'typeorm';
import { Article } from './article.model';
import { BaseModel } from './base.model';
import bcrypt from 'bcrypt';

@Entity()
class User extends BaseModel{
  
  @Column('varchar', {
    unique:true,
    nullable:false
  })
  public email?:string;
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

  @Column('varchar', {
    nullable:true,
    length:150
  })
  public password?:string;

  @OneToMany(()=>Article, (article)=>article.author)
  public articles?:Article[];

  @BeforeInsert()
  passwordEncryption(){
    this.password=bcrypt.hashSync(this.password, 10);
    console.log(this.password);
  }
  @BeforeInsert()
  @BeforeUpdate()
  capitalize(){
    this.firstname=titleCase(this.firstname);
    this.lastname=this.lastname?.toLocaleUpperCase();
  }

}; 
export{User};