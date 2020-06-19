import React from "react";

export const ActionType = {
  add: "ADD",
  delete: "DELETE",
  updateStatus: "UPDATE",
  toggleTask: "TOGGLE_TASK"
};

const initialState = { tasks: [] };

const reducer = (state, action) => {
  switch(action.type) {
    case ActionType.add:
      return {
        ...state,
        tasks: [ ...state.tasks, action.newTask ]
      }
    case ActionType.toggleTask:
      let task = state.tasks[action.index];
      return {
        ...state,
        tasks: [...state.tasks.slice(0, action.index), { ...task, active: !task.active}, ...state.tasks.slice(action.index + 1)]
      }
    case ActionType.delete:
        return {
          ...state,
          tasks: [...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)]
        }
    default: 
      throw new Error("Invalid Action");
  }
}

export const tasksContext = React.createContext({
  state: { tasks: [] },
  updateTasks: () => {}
});


const { Provider } = tasksContext;
export const TasksContextProvider = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};