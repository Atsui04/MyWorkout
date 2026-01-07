import styles from "./WorkoutsList.module.css";
import ExerciseCard from "./../../Exercises/ExerciseCard";

const WorkoutsList = ({ exercises }) => {
  return (
    <div>
      {exercises.map((ex) => (
        <ExerciseCard exercise={ex} key={ex.name} />
      ))}
    </div>
  );
};

export default WorkoutsList;
