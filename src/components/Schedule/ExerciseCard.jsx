import Button from "../../ui/Button/Button";
import styles from "./ExerciseCard.module.css";

const ExerciseCard = ({ exercise, onCompleted }) => {
  const { id, name, sets, reps, weights, completed } = exercise;

  return (
    <div
      className={`${styles.card} ${completed ? styles.workoutCompleted : ""}`}
    >
      <p className={styles.cardTitle}>{name}</p>
      <div className={styles.cardContent}>
        <p>Sets: {sets}</p>

        {reps.map((rep, i) => (
          <p key={i}>
            Rep {i + 1}: {rep} × {weights[i]} kg
          </p>
        ))}

        <Button
          className={styles.btn}
          variant=""
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
