import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"


export const useActivity = () => {
    const context = useContext(ActivityContext)
        
    // Throw an error if the hook is used outside of its provider
    if (!context) {
        throw new Error('The useActivity hook must be used within an ActivityProvider');
    }

    return context

}