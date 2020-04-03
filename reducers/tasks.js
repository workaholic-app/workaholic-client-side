import { 
  SET_VISIBILITY_FILTER,
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  VisibilityFilters
 } from '../actions/tasks';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  tasks: []
}

export function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [ ...state.tasks, action.newTask ],
      }
    case TOGGLE_TASK:
      let task = state.tasks[action.index];
      return {
        ...state,
        tasks: [...state.tasks.slice(0, action.index), { ...task, active: !task.active}, ...state.tasks.slice(action.index + 1)]
      }
    case DELETE_TASK:
        return {
          ...state,
          tasks: [...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)]
        }
    case SET_VISIBILITY_FILTER:
      return { 
        ...state, 
        visibilityFilter: action.filter
      }
    default: return state
  }
}