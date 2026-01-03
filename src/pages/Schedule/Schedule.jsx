import styles from "./Schedule.module.css";
import WorkoutDay from "./../../components/Schedule/WorkoutDay";
import { useState } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const todayNum = new Date().getDay();
const today = days[todayNum - 1];

// Test date
const testObj = {
  day: today,
  splitType: "PUSH",
  exercises: [
    {
      id: 1,
      name: "Жим лежачи",
      sets: 3,
      reps: [12, 10, 8],
      weights: [40, 40, 40],
      completed: false,
    },
    {
      id: 2,
      name: "Жим гантелями лежачи",
      sets: 3,
      reps: [12, 12, 10],
      weights: [20, 18, 18],
      completed: false,
    },
    {
      id: 3,
      name: "Жим гантелями сидячи",
      sets: 3,
      reps: [12, 12, 10],
      weights: [18, 20, 20],
      completed: false,
    },
    {
      id: 4,
      name: "Баттерфляй",
      sets: 3,
      reps: [12, 10, 10],
      weights: [40, 35, 35],
      completed: false,
    },
    {
      id: 5,
      name: "Махи в сторони",
      sets: 3,
      reps: [12, 12, 12],
      weights: [12, 10, 10],
      completed: false,
    },
    {
      id: 6,
      name: "Трицепс",
      sets: 3,
      reps: [12, 10, 8],
      weights: [30, 25, 25],
      completed: false,
    },
  ],
};

// Main page where all the exercises will be
const Schedule = () => {
  const [schedule, setSchedule] = useState(testObj);

  const handleCompleted = (id) => {
    setSchedule((prev) => ({
      ...prev,
      exercises: prev.exercises.map((exercise) =>
        exercise.id === id
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      ),
    }));
  };

  return (
    <div>
      <h2 className={styles.h2}>Your Schedule for today</h2>

      <WorkoutDay
        day={schedule.day}
        splitType={schedule.splitType}
        exercises={schedule.exercises}
        onCompleted={handleCompleted}
      />
    </div>
  );
};

export default Schedule;
