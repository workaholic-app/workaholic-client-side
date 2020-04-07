import styles from "./Tasks.module.scss";
import Card from "./Card";

const Notes = () => (
    <Card 
      className={styles['tasks-card']}
      title={"Notes"}
    >
    </Card>
);

export default Notes;