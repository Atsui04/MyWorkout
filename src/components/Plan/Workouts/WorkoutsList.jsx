import styles from "./WorkoutsList.module.css";

import ExerciseCard from "./../../Exercises/ExerciseCard";
import AddExerciseCard from "../../Exercises/AddExerciseCard";

const WorkoutsList = ({
  exercises,
  mode = "schedule",
  dispatch,
  activeDay,
}) => {
  return (
    <div className={styles.workouts}>
      {mode === "schedule" &&
        exercises.map((ex) => (
          <ExerciseCard exercise={ex} key={ex.name} mode={mode} />
        ))}

      {mode === "plan" && (
        <>
          {exercises.map((ex) => (
            <ExerciseCard
              exercise={ex}
              key={ex.name}
              mode={mode}
              onDelete={() =>
                dispatch({
                  type: "DELETE_EXERCISE",
                  day: activeDay,
                  payload: ex.id,
                })
              }
            />
          ))}
          {exercises.length < 10 && (
            <AddExerciseCard dispatch={dispatch} activeDay={activeDay} />
          )}
        </>
      )}
    </div>
  );
};

export default WorkoutsList;
