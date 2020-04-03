import styles from "./ScreenTime.module.scss";
import Card from "./Card";

const ScreenTime = () => (
    <Card 
      className={styles['screen-time']}
      title={"Screen Time"}
      titleClass={styles['card-title']}
    >
    </Card>
);

export default ScreenTime;