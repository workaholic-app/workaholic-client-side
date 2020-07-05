import React, { useState, useEffect } from "react";
import cx from "classnames";
import moment from "moment";
import Card from "./Card";

import styles from "../styles/Activity.module.scss";


const ActivityContainer = () => {
  const DEFAULT_ACTIVITY = {
    title: "Title",
    time: moment().add(3, "m"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
  };

  const [ nextActivity, setNextActivity ] = useState(DEFAULT_ACTIVITY)
  useEffect(() => {
    console.log("Basic Act", nextActivity);
  })

  return <Activity nextActivity={nextActivity} />
}


const Activity = ({ nextActivity }) => (
  <Card 
    className={styles.activity}
    title={"Activity"}
  >
    <div className={styles["next-activity"]}>
      <div className={styles["next-activity__head"]}>
        <div className={styles["next-activity__title"]}>{nextActivity.title}</div>
        <div className={styles["next-activity__time"]}>
          { nextActivity.time.fromNow() }
        </div>
      </div>
      <div className={styles["next-activity__media"]}></div>
      <div className={styles["next-activity__description"]}>
        {nextActivity.description}
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

export default ActivityContainer;