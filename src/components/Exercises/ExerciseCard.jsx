import Button from "../../ui/Button/Button";
import styles from "./ExerciseCard.module.css";

const ExerciseCard = ({
  exercise,
  onCompleted,
  mode = "schedule",
  onDelete,
  onEdit,
}) => {
  const { id, name, sets, reps, weights, completed } = exercise;

  return (
    <div
      className={`${styles.card} ${completed ? styles.workoutCompleted : ""}`}
    >
      <p className={styles.cardTitle}>{name}</p>

      <div className={styles.cardContent}>
        <p className={styles.stat}>
          <span>Sets: </span>
          <span>{sets}</span>
        </p>
        <p className={styles.stat}>
          <span>Reps: </span> <span>{reps}</span>
        </p>
        <p className={styles.stat}>
          <span>Weights: </span> <span>{weights}</span>
        </p>

        {/* Schedule mode */}
        {mode === "schedule" &&
          (!completed ? (
            <Button
              className={styles.btn}
              size="lg"
              onClick={() => onCompleted(id)}
            >
              Completed ✅
            </Button>
          ) : (
            <Button
              className={styles.btn}
              size="lg"
              variant="secondary"
              onClick={() => onCompleted(id)}
            >
              Cancel ❌
            </Button>
          ))}

        {/* Plan mode */}
        {mode === "plan" && (
          <div className={styles.actions}>
            <Button variant="secondary" onClick={onEdit}>
              Edit 📝
            </Button>
            <Button variant="primary" onClick={() => onDelete(id)}>
              Delete ❌
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
