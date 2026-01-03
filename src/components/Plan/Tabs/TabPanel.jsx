import Button from "../../../ui/Button/Button";
import styles from "./TabPanel.module.css";

const TabPanel = ({ activeDay }) => {
  return (
    <div className={styles.tabPanel}>
      <p className={styles.p}>
        You don’t have a workout planned for {activeDay} yet. What would you
        like to do?
      </p>
      <div className={styles.buttons}>
        <Button>Create Workout 💪</Button>
        <Button variant="secondary">Rest Day 💤</Button>
      </div>
    </div>
  );
};

export default TabPanel;
