import Button from "../../../ui/Button/Button";
import styles from "./Tab.module.css";

const Tab = ({ day, onSelectedDay, isActive }) => {
  return (
    <Button
      aria-selected={isActive}
      variant="ghost"
      size="lg"
      onClick={onSelectedDay}
      className={isActive ? styles.active : ""}
      role="tab"
    >
      {day}
    </Button>
  );
};

export default Tab;
