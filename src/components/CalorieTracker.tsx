import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CaloriesTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities }: CaloriesTrackerProps) {
    const caloriesConsumed = useMemo(
        () => activities.reduce(
            (total, activity) => activity.category === 1 ?
             total + activity.calories : 
             total, 0), [activities]
    )
    const caloriesBurned = useMemo(
        () => activities.reduce(
            (total, activity) => activity.category === 2 ?
             total + activity.calories : 
             total, 0), [activities]
    )
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])
    

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">
            Calories Resume
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay
                id={1}
                calories={caloriesConsumed}
                text="Consumed"
            />
            
            <CalorieDisplay
                id={2}
                calories={caloriesBurned}
                text="Burned"
            />

            <CalorieDisplay
                id={3}
                calories={netCalories}
                text="Difference"
            />
        </div>
    </>
  )
}
