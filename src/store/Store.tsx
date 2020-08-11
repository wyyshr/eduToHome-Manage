import * as React from 'react';

type StateType = {
  loading: boolean
  dispatch?: React.Dispatch<ActionType>
}
type ActionType = {
  type: string
  loading: boolean
}

// state
let initalState = {
  loading: false
}
// methods
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case UPDATA_LOADING:
      return { loading: action.loading }
    default:
      return state
  }
}
export const UPDATA_LOADING = 'UPDATA_LOADING'
export const LoadingContext = React.createContext<StateType>(initalState)

/**
 * 组件 Store
 *  分享数据
 */
const Store: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initalState)
  return (
    <LoadingContext.Provider
      value={{
        loading: state.loading,
        dispatch
      }}>
      {props.children}
    </LoadingContext.Provider>
  )
}
export default Store