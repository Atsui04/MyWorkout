import { useState } from "react";
import TabList from "../../components/Plan/Tabs/TabList";
import TabPanel from "../../components/Plan/Tabs/TabPanel";
import styles from "./Plan.module.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = days[new Date().getDay()];

const Plan = () => {
  const [activeDay, setActiveDay] = useState(today);

  const handleSelectedDay = (day) => {
    setActiveDay(day);
  };

  return (
    <div>
      <h2 className={styles.h2}>Plan your workouts for a week</h2>
      <TabList
        days={days}
        activeDay={activeDay}
        onSelectedDay={handleSelectedDay}
      />
      <TabPanel activeDay={activeDay} />
    </div>
  );
};

export default Plan;
