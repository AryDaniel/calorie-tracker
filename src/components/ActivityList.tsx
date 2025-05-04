import { useMemo, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { PencilSquareIcon, XCircleIcon }  from "@heroicons/react/24/solid" // npm i --save-dev @types/uuid
import { ActivityActions } from "../reducer/activityReducer"

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>

}

export default function ActivityList({activities, dispatch}: ActivityListProps) {

    const categoryName = useMemo(() => 
            (category: Activity['category']) => categories.map( cat => cat.id === category ? cat.name : ''),
        [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0,[activities])
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Comida Y Actividades
            </h2>

            {isEmptyActivities ? <p className="text-center my-5">No hay actividates</p> : 
            
            activities.map( activity => (
                <div key={activity.id} className="px-5 py-10 bg-white mt- flex justify-between shadow">
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

                    <div className="flex gap-5 items-center">
                        <button
                            onClick={() => dispatch({ type: 'set-activeId' , payload: { id: activity.id}})}
                        >
                            <PencilSquareIcon className="h-8 w-8 text-gray-800">

                            </PencilSquareIcon>
                        </button>
                        <button
                            onClick={() => dispatch({ type: 'delete-activity' , payload: { id: activity.id}})}
                        >
                            <XCircleIcon className='h-8 w-8 text-red-500'/>
                        </button>
                    </div>
                </div>
            ))}

        </>
    )
}
