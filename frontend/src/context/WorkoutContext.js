import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action)=>{
//dispatch function gives us the action and the payload
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts: [ action.payload , ...state.workouts ] //state gives the prev_value of workouts array
            }
        case 'DELETE_WORKOUT':
            return{
                workouts: state.workouts.filter((val)=>{
                    return (val._id !== action.payload._id)
                })
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children })=>{

    const [state, dispatch] = useReducer(workoutsReducer,{
        workouts:null
    })

    return (
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}