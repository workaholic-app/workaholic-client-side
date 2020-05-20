import styles from "./TasksCard.module.scss";
import Card from "./Card";
import { useForm } from "react-hook-form";
import cx from 'classnames';

const Tasks = (props) => {
  const { tasks, deleteTask } = props;
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    props.addNewTask({
      text: data.newTask,
      active: true
    });
    reset();
  }

  const toggleTask = index => {
    props.toggleTask(index);
  }

  return(
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

Tasks.getInitialProps = ({store, isServer, pathname, query}) => {
  store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
  return { custom: 'custom' }; // You can pass some custom props to the component from here
}

export default Tasks;