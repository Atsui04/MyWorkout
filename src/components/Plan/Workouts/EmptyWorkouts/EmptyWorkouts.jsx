import styles from "./EmptyWorkouts.module.css";
import Button from "../../../../ui/Button/Button";

const EmptyWorkouts = ({ activeDay, dispatch }) => {
  return (
    <>
      <p className={styles.p}>
        You don’t have a workout planned for {activeDay} yet. What would you
        like to do?
      </p>
      <div className={styles.buttons}>
        <Button
          onClick={() => dispatch({ type: "CREATE_WORKOUT", day: activeDay })}
        >
          Create Workout 💪
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "REST_DAY", day: activeDay })}
        >
          Rest Day 💤
        </Button>
      </div>
    </>
  );
};

export default EmptyWorkouts;
