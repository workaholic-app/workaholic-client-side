import React from "react";
import Activity from './Activity';
import Screentime from './Screentime';
import Health from './Health';
import Tasks from './TasksCard';
import Water from './Water';
import Notes from './NotesCard';
import styles from '../styles/Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={"app"}>
      <div className={styles.dashboard}>
        <Tasks />
        <div className={styles["col-2"]}>
          <Screentime />
          <Activity />
        </div>
        <div className={styles["col-3"]}>
          <Health />
          <Water />
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;