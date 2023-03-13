import * as actions from "./actions"

export const reducer = (state: TodoStoreType, action: TodoAction) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      if (action.payload.todoList) {
        const newId = (state.todoList.at(-1)?.id ?? 0) + 1
        action.payload.todoList[0].id = newId

        return {
          todoList: [...state.todoList, ...action.payload.todoList],
        }
      }
      return state
    default:
      return state
  }
}
