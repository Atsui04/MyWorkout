import { useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "../../../ui/Button/Button";
import FormItem from "./FormItem/FormItem";

import styles from "./CreateWorkout.module.css";
import { formReducer, initialState, validate } from "./formReducer";

const CreateWorkout = ({ dispatch }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialState);

  const handleSubmit = function (e) {
    e.preventDefault();

    // Error checking
    const errors = validate(formState);

    formDispatch({
      type: "form/setErrors",
      payload: errors,
    });

    if (Object.keys(errors).length > 0) return;

    const workout = {
      id: uuidv4(),
      name: formState.name,
      sets: formState.sets,
      reps: formState.reps,
      weights: formState.weights,
      completed: false,
    };

    // If everything is okay
    console.log("Workout data:", workout);

    dispatch({ type: "SUBMIT_EXERCISE", payload: workout });

    formDispatch({ type: "form/reset" });
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.p}>Create a workout:</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* Exercise name */}
        <FormItem
          label="Enter exercise name"
          name="name"
          value={formState.name}
          error={formState.errors.name}
          placeholder="Peck-deck"
          onChange={(value) =>
            formDispatch({
              type: "field/change",
              field: "name",
              payload: value,
            })
          }
        />
        {/* Exercise sets */}
        <FormItem
          label="Choose number of sets"
          name="sets"
          type="number"
          min={1}
          value={formState.sets}
          error={formState.errors.sets}
          onChange={(value) =>
            formDispatch({
              type: "field/change",
              field: "sets",
              payload: value,
            })
          }
        />
        {/* Exercise reps */}
        <FormItem
          label="Enter number of reps"
          name="reps"
          type="number"
          min={1}
          value={formState.reps}
          error={formState.errors.reps}
          onChange={(value) =>
            formDispatch({
              type: "field/change",
              field: "reps",
              payload: value,
            })
          }
        />
        {/* Exercise weights */}
        <FormItem
          label="Enter weight(in kg)"
          name="weights"
          type="number"
          min={0}
          value={formState.weights}
          error={formState.errors.weights}
          onChange={(value) =>
            formDispatch({
              type: "field/change",
              field: "weights",
              payload: value,
            })
          }
        />
        <div className={styles.buttons}>
          <Button
            type="submit"
            size="lg"
            disabled={Object.values(formState.errors).some(Boolean)}
          >
            Submit
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              formDispatch({ type: "form/reset" });
              dispatch({ type: "EMPTY" });
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkout;
