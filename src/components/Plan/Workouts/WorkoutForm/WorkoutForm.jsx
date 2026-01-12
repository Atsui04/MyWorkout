import Button from "../../../../ui/Button/Button";
import FormItem from "../FormItem/FormItem";
import styles from "./WorkoutForm.module.css";

const WorkoutForm = ({
  title,
  formState,
  formDispatch,
  onSubmit,
  onCancel,
  submitText = "Submit",
}) => {
  return (
    <div className={styles.formContainer}>
      <p className={styles.p}>{title}</p>

      <form className={styles.form} onSubmit={onSubmit} noValidate>
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

        <FormItem
          label="Enter weight (kg)"
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
            {submitText}
          </Button>

          <Button
            variant="secondary"
            size="lg"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
