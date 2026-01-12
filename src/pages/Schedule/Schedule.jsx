import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { today } from "../../constants/days";
import styles from "./Schedule.module.css";

import WorkoutDay from "../../components/Schedule/WorkoutDay";

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

  if (dayState.mode !== "workouts" && dayState.mode !== "rest") {
    return <p className={styles.h2}>No workouts for today</p>;
  }

  return (
    <div>
      <h2 className={styles.h2}>Your Schedule for today</h2>

      <WorkoutDay
        day={activeDay}
        exercises={dayState.exercises}
        onCompleted={handleCompleted}
        dayState={dayState}
        activeDay={activeDay}
      />
    </div>
  );
};

export default Schedule;
