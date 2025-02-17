import { useState } from "react"

const WorkoutForm = () => {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {name, weight, sets, reps}

        const response = await fetch(`/api/workouts`, {
            method: `POST`,
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            setName('')
            setWeight('')
            setSets('')
            setReps('')
            console.log(`new workout added`, json)
        }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise:</label>
        <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
        />

        <label>Weight in kg:</label>
        <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
        />

        <label>Number of Sets:</label>
        <input
            type="number"
            onChange={(e) => setSets(e.target.value)}
            value={sets}
        />

        <label>Number of Reps:</label>
        <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm