/* eslint-disable no-console */

import { createConnection } from 'typeorm';
let connection=null;

class DatabaseConnector {
  static async initDatabase (){
    try{
      connection =await createConnection();
      return connection;
    }
    catch(e){
      console.log(e);
    }
  }
};
export {DatabaseConnector, connection};