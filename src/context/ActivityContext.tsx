import { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  ActivityActions,
  activityReducer,
  ActivityState,
  initialState,
} from "../reducers/activityReducer";

type ActivityContextType = {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
};

type ActivityContextProviderProps = {
  children: ReactNode;
};

export const ActivityContext = createContext<ActivityContextType>(null!);

export const ActivityProvider = ({
  children,
}: ActivityContextProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <ActivityContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
