import ExerciseCard from "../Exercises/ExerciseCard";
import styles from "./WorkoutDay.module.css";

const WorkoutDay = ({ day, splitType, exercises, onCompleted }) => {
  const exercicesCount = exercises.length;
  const completedExercices = exercises.filter(
    (ex) => ex.completed === true
  ).length;
  const isCompleted = exercicesCount === completedExercices;

  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>{day}</h3>
      <p className={styles.p}>{splitType}</p>

      {!isCompleted && (
        <div className={styles.progressBar}>
          <label htmlFor="bar">Workouts completed: </label>
          <progress id="bar" value={completedExercices} max={exercicesCount} />
          <p>
            {completedExercices} / {exercicesCount}
          </p>
        </div>
      )}
      {/*  */}
      <div className={styles.workouts}>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onCompleted={onCompleted}
          />
        ))}
      </div>

      {isCompleted && (
        <div className={styles.completedText}>
          <p>Workout completed 🎉</p>
          <p>You did a really good job 👍</p>
        </div>
      )}
    </section>
  );
};

export default WorkoutDay;
