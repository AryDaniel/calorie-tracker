import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities}: ActivityListProps) {

    const categoryName = useMemo(() => 
            (category: Activity['category']) => categories.map( cat => cat.id === category ? cat.name : ''),
        [activities])
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Comida Y Actividades
            </h2>

            {activities.map( activity => (
                <div key={activity.id} className="px-5 py-10 bg-white mt- flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                            {categoryName(+activity.category)}
                        </p>
                        <p className="text-2xl font-bold pd-5">
                            {activity.excercise}
                        </p>
                        <p className="font-black text-4xl text-lime-500">
                            {activity.calories} {' '}
                            <span>Calories</span>
                        </p>
                    </div>
                </div>
            ))}

        </>
    )
}
