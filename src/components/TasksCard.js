import React from "react";
import styles from "../styles/TasksCard.module.scss";
import { ActionType, tasksContext } from "../contexts/TasksContext";

import Card from "./Card";
import { useForm } from "react-hook-form";
import cx from 'classnames';

const TasksCard = () => {
  const { state, dispatch } = React.useContext(tasksContext);
  const { tasks } = state;

  const { reset } = useForm();
  const onSubmit = data => {
    dispatch({ 
      type: ActionType.add, 
      newTask: {
        text: data.newTask,
        active: true
      }
    })
    reset();
  }

  const toggleTask = index => dispatch({ type: ActionType.toggleTask, index })
  const deleteTask = index => dispatch({ type: ActionType.delete, index })

  return <TasksCardPresentation 
    tasks={tasks}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
    onSubmit={onSubmit}
  />
}

const TasksCardPresentation = ({ tasks, toggleTask, deleteTask, onSubmit}) => {
  const { register, handleSubmit } = useForm();
  return (
    <Card 
      className={styles['tasks-card']}
      title={"Tasks"}
    >
      <div className={styles['tasks']}>
        <div className={styles['tasks__list']}>
          { tasks.length > 0 ?
              tasks.map((task, i) => 
                <div className={styles['tasks__item']} key={i}>
                  <div style={{display: "flex"}}>
                    <input
                      name="isDone" 
                      type="checkbox" 
                      checked={!task.active} 
                      onClick={() => toggleTask(i)}>
                    </input>
                    <div 
                      className={ cx({ [styles['tasks__item--striked']] : !task.active })}
                    >
                      {task.text}
                    </div>
                  </div>
                  <button onClick={() => deleteTask(i)}>REMOVE</button>
                </div>
            ) :
              <div>Add a new task</div>
          }
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="newTask" type="text" ref={register({ required:true, maxLength: 240 })} placeholder="New Task"></input>
        </form>
      </div>
    </Card>
  );
}

export default TasksCard;