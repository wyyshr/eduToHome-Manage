interface routeInterface {
  path: string,
  Component: any,
  exact?: boolean
  children?: Array<routeInterface>
}
export type RouteInterface = routeInterface