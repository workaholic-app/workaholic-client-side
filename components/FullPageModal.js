import cx from 'classnames'
import styles from "./Card.module.scss";

const FullPageModal = (props) => (
  <div className={cx(styles.card, props.className)}>
    {props.children}
  </div>
  
);
export default FullPageModal;