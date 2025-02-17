const WorkoutDetails = ({ workout }) => {

  return (
    <div className="workout-details">
        <h4>{workout.name}</h4>
        <p><strong>Weight (kg): </strong>{workout.weight}</p>
        <p><strong>Number of sets: </strong>{workout.sets}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails