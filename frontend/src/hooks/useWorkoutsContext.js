import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = ()=>{
    const context = useContext(WorkoutsContext)

    if(!context)
        throw Error('useContext must be within the scope of the context provider')

    return context
}