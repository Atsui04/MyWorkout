export const initialState = {
  Monday: {
    mode: "empty",
    exercises: [],
  },
  Tuesday: {
    mode: "empty",
    exercises: [],
  },
  Wednesday: {
    mode: "empty",
    exercises: [],
  },
  Thursday: {
    mode: "empty",
    exercises: [],
  },
  Friday: {
    mode: "empty",
    exercises: [],
  },
  Saturday: {
    mode: "empty",
    exercises: [],
  },
  Sunday: {
    mode: "empty",
    exercises: [],
  },
};

const updateExercise = (exercises, id, updater) =>
  exercises.map((ex) => (ex.id === id ? updater(ex) : ex));

export function reducer(state, action) {
  const dayState = state[action.day];

  switch (action.type) {
    case "CREATE_WORKOUT":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          mode: "creating",
        },
      };

    case "SUBMIT_EXERCISE":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          mode: "workouts",
          exercises: [...dayState.exercises, action.payload],
        },
      };

    case "START_EDIT_EXERCISE":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          mode: "edit",
          editingId: action.payload,
        },
      };

    case "EDIT_EXERCISE":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          mode: "workouts",
          editingId: null,
          exercises: updateExercise(
            dayState.exercises,
            action.payload.id,
            (ex) => ({ ...ex, ...action.payload })
          ),
        },
      };

    case "EDIT_ACTUAL":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          exercises: updateExercise(
            dayState.exercises,
            action.payload.id,
            (ex) => ({
              ...ex,
              actual: {
                ...ex.actual,
                ...action.payload.updates,
              },
            })
          ),
        },
      };

    case "DELETE_EXERCISE":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          exercises: dayState.exercises.filter(
            (ex) => ex.id !== action.payload
          ),
          mode: dayState.exercises.length === 1 ? "empty" : dayState.mode,
        },
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        [action.day]: {
          ...dayState,
          exercises: updateExercise(
            dayState.exercises,
            action.payload,
            (ex) => ({ ...ex, completed: !ex.completed })
          ),
        },
      };

    case "REST_DAY":
      return {
        ...state,
        [action.day]: {
          mode: "rest",
          exercises: [],
        },
      };

    case "CANCEL":
      return {
        ...state,
        [action.day]: {
          mode: dayState.exercises.length > 0 ? "workouts" : "empty",
          exercises: dayState.exercises,
        },
      };

    default:
      return state;
  }
}
