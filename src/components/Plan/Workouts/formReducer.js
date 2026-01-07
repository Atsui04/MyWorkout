export const initialState = {
  name: "",
  sets: "",
  reps: "",
  weights: "",
  errors: {
    name: null,
    sets: null,
    reps: null,
    weights: null,
  },
};

export function validate(state) {
  const errors = {};

  if (!state.name.trim()) {
    errors.name = "Exercise name is required";
  }

  if (!state.sets || state.sets < 1) {
    errors.sets = "Sets must be at least 1";
  }

  if (!state.reps || state.reps < 1) {
    errors.reps = "Reps must be at least 1";
  }

  if (state.weights < 0) {
    errors.weights = "Weight cannot be negative";
  }

  return errors;
}

export function formReducer(state, action) {
  switch (action.type) {
    case "field/change":
      return {
        ...state,
        [action.field]: action.payload,
        errors: {
          ...state.errors,
          [action.field]: null,
        },
      };

    case "form/setErrors":
      return {
        ...state,
        errors: action.payload,
      };

    case "form/reset":
      return initialState;

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
