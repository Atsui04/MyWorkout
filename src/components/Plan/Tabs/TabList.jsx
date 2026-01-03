import Tab from "./Tab";
import styles from "./TabList.module.css";

const TabList = ({ days, activeDay, onSelectedDay }) => {
  return (
    <div className={styles.tabList} role="tablist">
      {days.map((day) => (
        <Tab
          key={day}
          day={day}
          isActive={day === activeDay}
          onSelectedDay={() => onSelectedDay(day)}
        />
      ))}
    </div>
  );
};

export default TabList;
