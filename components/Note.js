import styles from "./TasksCard.module.scss";
import Card from "./Card";
import Router from 'next/router'

const Notes = (props) => {
  let { notes } = props;

  return (
    <div>
      
    </div>
  )
};

Notes.getInitialProps = ({store, isServer, pathname, query}) => {
  store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
  return { custom: 'custom' }; // You can pass some custom props to the component from here
}

export default Notes;