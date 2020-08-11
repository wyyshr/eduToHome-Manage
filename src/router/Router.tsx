import * as React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import routers from "./routerConfig";

const RouterView: React.FC = () => {
  return (
    <Router>
      {
        routers.map(({path,exact,Component,children},i) => {
          return (
            <Route key={i} path={path} exact={exact?true:false} 
             render={(props) => (
               <Component {...props} routes={children} />
             )} />
          )
        })
      }
      {/* <Route path="/" exact component={Home}></Route>
      <Route path="/show" component={Show}></Route> */}
    </Router>
  )
}
export default RouterView