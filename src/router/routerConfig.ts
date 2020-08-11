import Home from '../views/home/Home';
import Show from '../views/show/Show';
import BasicMsg from '../views/show/children/basicMsg/BasicMsg'
import Teachers from '../views/show/children/teachers/Teachers'
import Parents from '../views/show/children/parents/Parents'

import { RouteInterface } from "../assets/interface/routerInterface";

// interface routeInterface {
//   path: string,
//   component: React.FC<any>,
//   exact?: boolean
//   children?: Array<routeInterface>
// }

const routers: Array<RouteInterface> = [
  {
    path: '/',
    Component: Home,
    exact: true
  },
  {
    path: '/show',
    Component: Show,
    children: [
      {
        path: '/show/',
        Component: BasicMsg,
        exact: true
      },
      {
        path: '/show/teachers',
        Component: Teachers
      },
      {
        path: '/show/parents',
        Component: Parents
      }
    ]
  }
]
export default routers