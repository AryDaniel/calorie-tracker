import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CalorieTracker() {
    const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()

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
