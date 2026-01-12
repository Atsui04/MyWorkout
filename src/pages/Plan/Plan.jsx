import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import styles from "./Plan.module.css";
import TabList from "../../components/Plan/Tabs/TabList";
import TabPanel from "../../components/Plan/Tabs/TabPanel";
import { DAYS, today } from "../../constants/days";

import CreateWorkout from "../../components/Plan/Workouts/CreateWorkout/CreateWorkout";
import EmptyWorkouts from "../../components/Plan/Workouts/EmptyWorkouts/EmptyWorkouts";
import WorkoutsList from "../../components/Plan/Workouts/WorkoutsList";
import EditWorkout from "../../components/Plan/Workouts/EditWorkout/EditWorkout";
import RestDay from "../../components/Plan/Workouts/RestDay/RestDay";

const Plan = () => {
  const [activeDay, setActiveDay] = useState(today);
  const { workouts, dispatch } = useOutletContext();

  const dayState = workouts[activeDay];

  const handleSelectedDay = (day) => {
    setActiveDay(day);
  };

  return (
    <div>
      <h2 className={styles.h2}>Plan your workouts for a week</h2>

      <TabList
        days={DAYS}
        activeDay={activeDay}
        onSelectedDay={handleSelectedDay}
      />

      <TabPanel>
        {dayState.mode === "empty" && (
          <EmptyWorkouts activeDay={activeDay} dispatch={dispatch} />
        )}

        {dayState.mode === "creating" && (
          <CreateWorkout dispatch={dispatch} activeDay={activeDay} />
        )}

        {dayState.mode === "workouts" && (
          <WorkoutsList
            exercises={dayState.exercises}
            mode="plan"
            dispatch={dispatch}
            activeDay={activeDay}
          />
        )}

        {dayState.mode === "rest" && (
          <RestDay dispatch={dispatch} activeDay={activeDay} mode="plan" />
        )}

        {dayState.mode === "edit" && (
          <EditWorkout
            exercise={dayState.exercises.find(
              (ex) => ex.id === dayState.editingId
            )}
            activeDay={activeDay}
            dispatch={dispatch}
          />
        )}
      </TabPanel>
    </div>
  );
};

export default Plan;
