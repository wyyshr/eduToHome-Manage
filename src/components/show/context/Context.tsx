import * as React from 'react';
import { RouteInterface } from "../../../assets/interface/routerInterface";
import { Route } from "react-router-dom";

interface contextPropsType{
  routes: Array<RouteInterface>
}

/**
 * Show组件：Context
 *  路由组件
 */
const Context: React.FC<contextPropsType> = ({routes}) => {

  return (
    <>
      {
      routes.map(({ path, Component, exact }, i) => {
        return (
          <Route key={i} exact={exact ? true : false} path={path} component={Component} />
        )
      })
      }
    </>
  )
}
export default Context