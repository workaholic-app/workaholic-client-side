import styles from "./Water.module.scss";
import Card from "./Card";

const ScreenTime = () => (
    <Card 
      className={styles.water}
      title={"Water"}
      titleClass={styles['card-title']}
    >
    </Card>
);

export default ScreenTime;