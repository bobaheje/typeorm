import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


const App=()=>{
  return (
    <div>
      <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    </div>
    
  )
};
const nodeRoot=document.querySelector("#root");
ReactDOM.render(<App />,nodeRoot);
