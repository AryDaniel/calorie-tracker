import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducer/activityReducer";

type ActivityPropviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityPropvider = ({ children }: ActivityPropviderProps) => {

    const [ state, dispatch] = useReducer(activityReducer, initialState)

    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            { children }
        </ActivityContext.Provider>
    )
}