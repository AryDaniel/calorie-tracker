import { categories } from "../data/categories"

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select className="boder border-slate-300 p-2 rounded-lg w-full bg-white" id="category">
                { categories.map((category) => (
                    <option 
                        key={category.id}
                        value={category.name}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">        
            <label htmlFor="activity" className="font-bold">Activity:</label>
            <input
                id="activity"
                type="text"
                className="border boder-slate-300 p2 rounded-lg"
                placeholder="Ej. Jugo de Naranja, Ensalada, Ejercicio, Pesas, bicicleta"
            />
        </div>

        <div className="grid grid-cols-1 gap-3">        
            <label htmlFor="calorie" className="font-bold">Calories:</label>
            <input
                id="calorie"
                type="number"
                className="border boder-slate-300 p2 rounded-lg"
                placeholder="Calories. ej. 300 or 500"
            />
        </div>

        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Add Activity of Calories"
        />

    </form>
  )
}
