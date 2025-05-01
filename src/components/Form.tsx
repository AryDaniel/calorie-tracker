import {useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { v4 as uuidv4 } from 'uuid' // npm i uuid

import { categories } from "../data/categories"
import type { Activity } from "../types"
import { ActivityActions } from "../reducer/activityReducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    excercise: '',
    calories: 0
}

export default function Form({ dispatch }: FormProps) {
    const [activity, setActivity] = useState<Activity>(initialState)

    // Handles change events from either an input or a select element
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { excercise, calories } = activity
        return excercise.trim() != '' && calories > 0
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: 'save-activity', payload: {newActivity: activity}})

        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

  return (
    <form 
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Category:</label>
            <select 
                className="boder border-slate-300 p-2 rounded-lg w-full bg-white" 
                id="category"
                value={activity.category}
                onChange={handleChange}
            >
                { categories.map((category) => (
                    <option 
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">        
            <label htmlFor="excercise" className="font-bold">Exercise:</label>
            <input
                id="excercise"
                type="text"
                className="border boder-slate-300 p2 rounded-lg"
                placeholder="Ej. Jugo de Naranja, Ensalada, Ejercicio, Pesas, bicicleta"
                value={activity.excercise}
                onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">        
            <label htmlFor="calories" className="font-bold">Calories:</label>
            <input
                id="calories"
                type="number"
                className="border boder-slate-300 p2 rounded-lg"
                placeholder="Calories. ej. 300 or 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>

        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            value={activity.category === 1 ? "Add Activity" : "Add Food"}
            disabled={!isValidActivity()}
        />

    </form>
  )
}
