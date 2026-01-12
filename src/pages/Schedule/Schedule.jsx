import styles from "./Schedule.module.css";
import WorkoutDay from "../../components/Schedule/WorkoutDay";
import { useState } from "react";
import { today } from "../../constants/days";
import { useOutletContext } from "react-router-dom";

const Schedule = () => {
  const { workouts, dispatch } = useOutletContext();
  const [activeDay] = useState(today);

  const dayState = workouts[activeDay];

  const handleCompleted = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      day: activeDay,
      payload: id,
    });
  };

  if (dayState.mode !== "workouts") {
    return <p className={styles.h2}>No workouts for today</p>;
  }

  return (
    <div>
      <h2 className={styles.h2}>Your Schedule for today</h2>

      <WorkoutDay
        day={activeDay}
        exercises={dayState.exercises}
        onCompleted={handleCompleted}
      />
    </div>
  );
};

export default Schedule;
