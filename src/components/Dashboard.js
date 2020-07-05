import React from "react";
import Activity from './ActivityCard';
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
        <div className={styles["col-2"]}>
          <Tasks />
          <Notes />
        </div>
        <Activity />
        <div className={styles["col-2"]}>
          <Screentime />
          <Health />
          {/* <Water /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;