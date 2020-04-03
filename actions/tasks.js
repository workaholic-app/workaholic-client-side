export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTask(newTask) {
  return { type: ADD_TASK, newTask }
}

export function toggleTask(index) {
  return { type: TOGGLE_TASK, index }
}

export function deleteTask(index) {
  return { type: DELETE_TASK, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}