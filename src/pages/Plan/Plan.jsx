import { useReducer, useState } from "react";
import TabList from "../../components/Plan/Tabs/TabList";
import TabPanel from "../../components/Plan/Tabs/TabPanel";
import styles from "./Plan.module.css";
import { DAYS, today } from "../../constants/days";
import CreateWorkout from "./../../components/Plan/Workouts/CreateWorkout";
import EmptyWorkouts from "./../../components/Plan/Workouts/EmptyWorkouts";
import WorkoutsList from "../../components/Plan/Workouts/WorkoutsList";

const initialState = {
  mode: "empty",
  exercises: [],
};

function reducer(state, action) {
  switch (action.type) {
    // To see form for creating workout
    case "CREATE_WORKOUT":
      return {
        ...state,
        mode: "creating",
      };
    // To see a text "Rest day"
    case "REST_DAY":
      return {
        ...state,
        mode: "rest",
      };
    // If there's no workouts or rest day
    case "EMPTY":
      return {
        ...state,
        mode: "empty",
      };
    // If there's at least 1 exercise
    case "SUBMIT_EXERCISE":
      return {
        ...state,
        mode: "workouts",
        exercises: [...state.exercises, action.payload],
      };

    default:
      throw new Error("Unknown action");
  }
}

const Plan = () => {
  const [activeDay, setActiveDay] = useState(today);
  const [state, dispatch] = useReducer(reducer, initialState);

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
        {state.mode === "empty" && (
          <EmptyWorkouts activeDay={activeDay} dispatch={dispatch} />
        )}
        {state.mode === "creating" && <CreateWorkout dispatch={dispatch} />}
        {state.mode === "workouts" && (
          <WorkoutsList exercises={state.exercises} />
        )}
      </TabPanel>
    </div>
  );
};

export default Plan;
