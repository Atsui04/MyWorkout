import Button from "../../ui/Button/Button";
import styles from "./ExerciseCard.module.css";

const ExerciseCard = ({ exercise, onCompleted }) => {
  const { id, name, sets, reps, weights, completed } = exercise;
  // Check if there more than 1 reps
  const repsCount = reps.length;
  console.log(repsCount);

  return (
    <div
      className={`${styles.card} ${completed ? styles.workoutCompleted : ""}`}
    >
      <p className={styles.cardTitle}>{name}</p>
      <div className={styles.cardContent}>
        <p>Sets: {sets}</p>

        {repsCount > 1 ? (
          reps.map((rep, i) => (
            <p key={i}>
              Rep {i + 1}: {rep} × {weights[i]} kg
            </p>
          ))
        ) : (
          <p>
            Rep: {reps} × {weights} kg
          </p>
        )}

        <Button
          className={styles.btn}
          size="lg"
          onClick={() => onCompleted(id)}
        >
          {completed ? "Cancel ❌" : "Completed ✅"}
        </Button>
      </div>
    </div>
  );
};

export default ExerciseCard;
