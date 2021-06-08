import React,{Component} from 'react';
import { Route, Switch } from 'react-router';
import Login from './components/login'
import Layout from './components/hoc/layout'

class Routes extends Component{
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>    
      </Layout> 
    );
       
  }
};

export default Routes;

