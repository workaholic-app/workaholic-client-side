import { connect } from 'react-redux'
import { toggleTask, addTask, VisibilityFilters, deleteTask } from '../actions/tasks'
import Tasks from "./Tasks";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTask: index => dispatch(toggleTask(index)),
  addNewTask: text => dispatch(addTask(text)),
  deleteTask: index => dispatch(deleteTask(index))
})

export default connect(state => state.tasks, mapDispatchToProps)(Tasks);
