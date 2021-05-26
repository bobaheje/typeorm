/* eslint-disable no-console */
/* eslint-disable quotes */
import { config } from "dotenv";
import { DatabaseConnector } from "../app.database";
import { app } from "./app.bootstrap";





config({path:"config.env"});
app.set('name', process.env.APP_NAME);

const init= async ()=>{
  const connection =await DatabaseConnector.initDatabase();
  if(connection){
    app.listen(process.env.PORT, ()=>{
      console.log(`${app.get('name')} is listening on port ${process.env.PORT}`);
    });
    
  }
  else{
    console.log('Problem with DB connection');
  }
};
init();