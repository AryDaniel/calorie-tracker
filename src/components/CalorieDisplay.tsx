type CalorieDisplayProps = {
    id: number
    calories: number
    text: string
}

export default function CalorieDisplay({ id, calories, text}: CalorieDisplayProps) {
  return (
    <>
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            
            <span
                className={`font-black text-6xl ${
                    id === 1 ? "text-green-500" : id === 2 ? "text-orange-500" : "text-gray-500"
                }`}
            >
                {calories}
            </span>
            {text}
            
        </p>
    </>
  )
}
