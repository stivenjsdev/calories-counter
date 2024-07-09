import { Activity } from "../types/index";

export type ActivityActions =
  | { type: "SAVE_ACTIVITY"; payload: { newActivity: Activity } }
  | { type: "SET_ACTIVE_ID"; payload: { id: Activity["id"] } }
  | { type: "DELETE_ACTIVITY"; payload: { id: Activity["id"] } };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "SAVE_ACTIVITY") {
    let updatedActivities: Activity[] = [];

    if (state.activeId) {
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: "",
    };
  }

  if (action.type === "SET_ACTIVE_ID") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "DELETE_ACTIVITY") {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id
      ),
    };
  }

  return state;
};
