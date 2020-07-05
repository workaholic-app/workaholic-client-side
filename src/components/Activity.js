import React from "react";
import cx from "classnames";
import Card from "./Card";

import styles from "../styles/Activity.module.scss";

const Activity = () => (
  <Card 
    className={styles.activity}
    title={"Activity"}
  >
    <div className={styles["next-activity"]}>
      <div className={styles["next-activity__head"]}>
        <div className={styles["next-activity__title"]}>Title</div>
        <div className={styles["next-activity__time"]}>3 mins</div>
      </div>
      <div className={styles["next-activity__media"]}></div>
      <div className={styles["next-activity__description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </div>
      <div className={styles["next-activity__actions"]}>
        <button className={cx(styles["next-activity__button"], styles["next-activity__button--complete"])}>
          Complete Activity
        </button>
        <button className={cx(styles["next-activity__button"], styles["next-activity__button--skip"])}>
          Skip Activity
        </button>
      </div>
    </div>
    <div className={styles["activity-divider"]}></div>
    <div className={styles["upcoming-activities"]}>
      <div className={styles["upcoming-activities__title"]}>Coming Up</div>
      <div className={styles["upcoming-activities__activity"]}>
        <div className={styles["upcoming-activities__activity__snapshot"]}></div>
        <div className={styles["upcoming-activities__activity__content"]}>
          <div className={styles["upcoming-activities__activity__content__title"]}>
            Activity 1
          </div>
          <div className={styles["upcoming-activities__activity__content__desc"]}>
            lorem ipsum sit amet...
          </div>
        </div>
      </div>
      <div className={styles["upcoming-activities__activity"]}>
        <div className={styles["upcoming-activities__activity__snapshot"]}></div>
        <div className={styles["upcoming-activities__activity__content"]}>
          <div className={styles["upcoming-activities__activity__content__title"]}>
            Activity 1
          </div>
          <div className={styles["upcoming-activities__activity__content__desc"]}>
            lorem ipsum sit amet...
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default Activity;