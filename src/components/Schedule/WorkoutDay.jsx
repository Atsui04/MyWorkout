import ExerciseCard from "../Exercises/ExerciseCard";
import RestDay from "../Plan/Workouts/RestDay/RestDay";
import styles from "./WorkoutDay.module.css";

const WorkoutDay = ({
  day,
  splitType,
  exercises,
  onCompleted,
  dayState,
  activeDay,
}) => {
  const exercicesCount = exercises.length;
  const completedExercices = exercises.filter(
    (ex) => ex.completed === true
  ).length;
  const isCompleted = exercicesCount === completedExercices;

  return (
    <section className={styles.section}>
      {dayState.mode === "rest" && (
        <RestDay activeDay={activeDay} color="#e9ecef" />
      )}

      {dayState.mode === "workouts" && (
        <>
          {/* h3 shows current day */}
          <h3 className={styles.h3}>{day}</h3>
          <p className={styles.p}>{splitType}</p>

          {/* If exercise isn't completed it will display progress bar */}
          {!isCompleted && (
            <div className={styles.progressBar}>
              <label htmlFor="bar">Workouts completed: </label>
              <progress
                id="bar"
                value={completedExercices}
                max={exercicesCount}
              />
              <p>
                {completedExercices} / {exercicesCount}
              </p>
            </div>
          )}
          {/* map for every exercise */}
          <div className={styles.workouts}>
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onCompleted={onCompleted}
              />
            ))}
          </div>
          {/* If the exercise is completed, the progress bar will be hidden and this div will be displayed */}
          {isCompleted && (
            <div className={styles.completedText}>
              <p>Workout completed 🎉</p>
              <p>You did a really good job 👍</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default WorkoutDay;
