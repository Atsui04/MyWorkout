import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import WorkoutForm from "../WorkoutForm/WorkoutForm";
import { formReducer, initialState, validate } from "./formReducer";

const CreateWorkout = ({ dispatch, activeDay }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formState);

    formDispatch({
      type: "form/setErrors",
      payload: errors,
    });

    if (Object.keys(errors).length > 0) return;

    dispatch({
      type: "SUBMIT_EXERCISE",
      day: activeDay,
      payload: {
        id: uuidv4(),
        name: formState.name,
        sets: formState.sets,
        reps: formState.reps,
        weights: formState.weights,
        completed: false,
        actual: {},
      },
    });

    formDispatch({ type: "form/reset" });
  };

  return (
    <WorkoutForm
      title="Create a workout"
      formState={formState}
      formDispatch={formDispatch}
      onSubmit={handleSubmit}
      onCancel={() => dispatch({ type: "CANCEL", day: activeDay })}
      submitText="Create"
    />
  );
};

export default CreateWorkout;
