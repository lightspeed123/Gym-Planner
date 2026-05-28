import { useEffect } from "react";
import WorkoutDetails from '../components/WorkoutDetails.js'
import WorkoutForm from "../components/WorkoutForm.js";
import { useWorkoutContext } from "../hooks/useWorkoutsContext.js";

const Home = ()=>{

    const {workouts, dispatch} = useWorkoutContext()

    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response =  await fetch('https://gym-buddy-p2zv.onrender.com/api/workouts') //proxy added in frontend package.json to resolve CORS error
            const json = await response.json() // converts the response into array of json objs

            if(response.ok)
                dispatch({type:'SET_WORKOUTS', payload: json})
        }

        fetchWorkouts() //used to avoid making the useEffect's function async
    },[dispatch])

    return (
        <div className="home">
            <div className="workout">
                {workouts && workouts.map((workout)=>{
                return <WorkoutDetails key={workout._id} workout={workout}/>
            })}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;
