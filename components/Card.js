import cx from 'classnames'
import styles from "./Card.module.scss";

const Card = (props) => (
  <div className={cx(styles.card, props.className)}>
    <p className={cx(styles["card-title"], props.titleClass)}>{props.title}</p>
    {props.children}
  </div>
  
);
export default Card;