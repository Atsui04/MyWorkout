import { useEffect, useRef } from "react";
import Button from "../../../ui/Button/Button";
import styles from "./Tab.module.css";

const Tab = ({ day, onSelectedDay, isActive }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [isActive]);
  return (
    <div ref={ref}>
      <Button
        aria-selected={isActive}
        variant="ghost"
        size="lg"
        onClick={onSelectedDay}
        className={`${styles.tab} ${isActive ? styles.active : ""}`}
        role="tab"
      >
        {day}
      </Button>
    </div>
  );
};

export default Tab;
