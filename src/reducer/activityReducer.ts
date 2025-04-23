import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity', payload: { newActivity: Activity }
}

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
        state: ActivityState = initialState,
        action: ActivityActions
    ) => {

    if(action.type === 'save-activity') {
        console.log("From type of save-activity")
    }

    return state
}