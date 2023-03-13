import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { initialState } from "./initialState"
import { reducer } from "./reducer"

type TodoStoreProps = {
  children: ReactNode
}

type TodoContextType = [TodoStoreType, Dispatch<TodoAction>]

export const TodoContext = createContext<TodoContextType>([
  initialState,
  () => {},
])

const TodoStore = ({ children }: TodoStoreProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoStore
