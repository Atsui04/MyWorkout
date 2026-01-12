import { useReducer } from "react";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import { formReducer, validate } from "../CreateWorkout/formReducer";

const EditWorkout = ({ exercise, dispatch, activeDay }) => {
  const [formState, formDispatch] = useReducer(formReducer, {
    name: exercise.name,
    sets: exercise.sets,
    reps: exercise.reps,
    weights: exercise.weights,
    errors: {
      name: null,
      sets: null,
      reps: null,
      weights: null,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formState);

    formDispatch({
      type: "form/setErrors",
      payload: errors,
    });

    if (Object.keys(errors).length > 0) return;

    dispatch({
      type: "EDIT_EXERCISE",
      day: activeDay,
      payload: {
        id: exercise.id,
        name: formState.name,
        sets: formState.sets,
        reps: formState.reps,
        weights: formState.weights,
      },
    });
  };

  return (
    <WorkoutForm
      title="Edit workout"
      formState={formState}
      formDispatch={formDispatch}
      onSubmit={handleSubmit}
      onCancel={() => dispatch({ type: "CANCEL_EDIT", day: activeDay })}
      submitText="Save changes"
    />
  );
};

export default EditWorkout;
