/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    name: "",
    muscle: "",
    sets: "",
    reps: "",
  });

  const [workouts, setWorkouts] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("workouts");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWorkouts(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const addWorkout = () => {
    if (!workout.name || !workout.muscle) return;

    setWorkouts([
      ...workouts,
      {
        ...workout,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      },
    ]);

    setWorkout({ name: "", muscle: "", sets: "", reps: "" });
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
    <section id="tracker" className="bg-gray-950 text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Workout <span className="text-orange-500">Tracker</span>
      </h2>

      {/* FORM */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl mb-10">
        <div className="grid md:grid-cols-4 gap-4">
          <input
            name="name"
            value={workout.name}
            onChange={handleChange}
            placeholder="Exercise"
            className="bg-gray-800 p-3 rounded outline-none"
          />

          <select
            name="muscle"
            value={workout.muscle}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded outline-none"
          >
            <option value="">Muscle</option>
            <option>Chest</option>
            <option>Back</option>
            <option>Legs</option>
            <option>Shoulders</option>
            <option>Arms</option>
          </select>

          <input
            name="sets"
            value={workout.sets}
            onChange={handleChange}
            placeholder="Sets"
            type="number"
            className="bg-gray-800 p-3 rounded outline-none"
          />

          <input
            name="reps"
            value={workout.reps}
            onChange={handleChange}
            placeholder="Reps"
            type="number"
            className="bg-gray-800 p-3 rounded outline-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addWorkout}
          className="mt-6 bg-orange-500 text-black px-6 py-2 font-semibold"
        >
          Add Workout
        </motion.button>
      </div>

      {/* WORKOUT LIST */}
      <div className="max-w-4xl mx-auto space-y-4">
        {workouts.length === 0 && (
          <p className="text-center text-gray-400">
            No workouts added yet.
          </p>
        )}

        {workouts.map((w) => (
          <motion.div
            key={w.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">
                {w.name} <span className="text-orange-500">({w.muscle})</span>
              </h4>
              <p className="text-sm text-gray-400">
                {w.sets} sets × {w.reps} reps • {w.date}
              </p>
            </div>

            <button
              onClick={() => deleteWorkout(w.id)}
              className="text-red-400 hover:text-red-600"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutTracker;














// import { useEffect, useState } from "react";

// const WorkoutTracker = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [workoutName, setWorkoutName] = useState("");
//   const [workouts, setWorkouts] = useState([]);

//   // load plan + workouts
//   useEffect(() => {
//     const plan = localStorage.getItem("selectedPlan");
//     const storedWorkouts = localStorage.getItem("workouts");

//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     if (plan) setSelectedPlan(plan);
//     if (storedWorkouts) setWorkouts(JSON.parse(storedWorkouts));
//   }, []);

//   // persist workouts
//   useEffect(() => {
//     localStorage.setItem("workouts", JSON.stringify(workouts));
//   }, [workouts]);

//   const addWorkout = () => {
//     if (!workoutName) return;

//     setWorkouts([
//       ...workouts,
//       { id: Date.now(), name: workoutName },
//     ]);

//     setWorkoutName("");
//   };

//   return (
//     <section
//       id="tracker"
//       className="scroll-mt-24 bg-black text-white py-20 px-6 md:px-16"
//     >
//       <h2 className="text-4xl font-bold text-center mb-6">
//         Workout <span className="text-orange-500">Tracker</span>
//       </h2>

//       {/* Selected Plan */}
//       {selectedPlan && (
//         <p className="text-center text-orange-500 mb-8">
//           Selected Plan: <strong>{selectedPlan}</strong>
//         </p>
//       )}

//       <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl">
//         <input
//           value={workoutName}
//           onChange={(e) => setWorkoutName(e.target.value)}
//           placeholder="Enter workout name"
//           className="w-full p-3 mb-4 bg-gray-800 rounded outline-none"
//         />

//         <button
//           onClick={addWorkout}
//           className="bg-orange-500 text-black px-6 py-2 font-semibold hover:bg-orange-600 transition"
//         >
//           Add Workout
//         </button>

//         <ul className="mt-6 space-y-3">
//           {workouts.map((w) => (
//             <li
//               key={w.id}
//               className="bg-gray-800 p-3 rounded"
//             >
//               {w.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default WorkoutTracker;
