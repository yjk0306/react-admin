
import React, { Component } from 'react';

import { HashRouter, Route ,Switch} from 'react-router-dom';


import Login  from "../views/login";
import Home from "../views/home";

class RouterMap extends Component { 
  render() {
    return (
           <HashRouter  >
              <Switch>      
                <Route exact  path="/" component={Login}/>
                <Route path="/home" component={Home}/>
               
              </Switch>    
          </HashRouter>

    );
  }
}

export default RouterMap;