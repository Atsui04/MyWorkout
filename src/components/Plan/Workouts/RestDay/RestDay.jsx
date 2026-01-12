import Button from "../../../../ui/Button/Button";
import styles from "./RestDay.module.css";
import { today } from "../../../../constants/days";

const RestDay = ({ dispatch, activeDay, color, mode = "schedule" }) => {
  function handleCancel() {
    dispatch({ type: "CANCEL", day: activeDay });
  }

  return (
    <div className={`${styles.rest}`} style={{ color: color }}>
      <p>
        You decide to rest {activeDay === today ? "today" : `at ${activeDay}`}{" "}
        😪
      </p>
      {mode === "plan" && (
        <Button size="lg" onClick={handleCancel}>
          Cancel
        </Button>
      )}
    </div>
  );
};

export default RestDay;
